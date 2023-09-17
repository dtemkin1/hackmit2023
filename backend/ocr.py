import os
from pdf2image import convert_from_path
import pytesseract


def to_text(file_path):
    """
    Given an image (.png, .jpeg, .heif) or .pdf file, returns text in the file
    :return dictionary with each page corresponding to text present
    """
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


def prepare_input(extracted_text: dict):
    """
    Given a dictionary, returns values in one string
    """
    return '\n'.join(extracted_text.values())
