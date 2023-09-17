import os
import openai
from pylatex import Document



openai.api_key = "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"

decodedString = testString.decode("utf-8")

def HomeworkHelpGenerator(assignmentBody,Language = "English",Level = 5):
    """
    inputs: string detailing worksheet for ChatGPT to explain solutions for
    outputs: PDF file that details worked out solutions for the given worksheet
    """
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": f"Code a LaTeX document in {Language} with a step-by-step guide for someone in grade {Level}. The document should explain how to solve the following worksheet:{assignmentBody}. Clearly indicate where the LaTeX starts and ends with the words START and END."},
    ]
    )
    if "START" not in completion.choices[0].message["content"] or "END" not in completion.choices[0].message["content"]:
        raise Exception("ChatGPT did not return a valid document. Please try again.")
    pdfBody = completion.choices[0].message["content"].split("START")[1].split("END")[0]
    return pdfBody

