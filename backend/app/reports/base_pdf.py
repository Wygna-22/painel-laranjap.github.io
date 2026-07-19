from abc import ABC, abstractmethod
from io import BytesIO
from datetime import datetime
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

class BasePdfReport(ABC):
    def generate(self) -> BytesIO:
        stream = BytesIO()
        document = SimpleDocTemplate(stream)
        styles = getSampleStyleSheet()
        elements = []
        title = Paragraph(
            f"<b>{self.get_title()}</b>",
            styles["Title"],
        )

        elements.append(title)

        elements.append(Spacer(1, 20))

        elements.append(
            Paragraph(
                f"Gerado em: {datetime.now():%d/%m/%Y %H:%M}",
                styles["Normal"],
            )
        )

        elements.append(Spacer(1, 20))

        data = [
            self.get_headers(),
            *self.get_rows(),
        ]

        table = Table(data)

        table.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, 0), colors.orange),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),

                    ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),

                    ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),

                    ("ALIGN", (0, 0), (-1, -1), "CENTER"),

                    ("BOTTOMPADDING", (0, 0), (-1, 0), 8),

                    ("BACKGROUND", (0, 1), (-1, -1), colors.whitesmoke),
                ]
            )
        )

        elements.append(table)

        elements.append(Spacer(1, 20))

        footer = Paragraph(
            self.get_footer(),
            styles["Normal"],
        )

        elements.append(footer)

        document.build(elements)

        stream.seek(0)

        return stream

    @abstractmethod
    def get_title(self):
        ...

    @abstractmethod
    def get_headers(self):
        ...

    @abstractmethod
    def get_rows(self):
        ...

    @abstractmethod
    def get_footer(self):
        ...