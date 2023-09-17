import os
from pdf2image import convert_from_path
import pytesseract


def to_text(file_path):
    extension = file_path.split('.')[-1]
    # supported file types
    assert extension.lower() in ('pdf', 'png', 'jpeg', 'heif')

    # images
    if extension in ('png', 'jpeg', 'heif'):
        return {0: pytesseract.image_to_string(file_path)}

    # pdf
    doc = convert_from_path(file_path)
    pdf_text = {page_number: pytesseract.image_to_string(page_data) for page_number, page_data in enumerate(doc)}
    return pdf_text
