import ocr
# import mlstuff # to change to new name
import ChatGPT_API_Interface
import sys

if __name__ == '__main__':
    file_path = sys.argv[1]

    # converting file to text
    text = ocr.to_text(file_path)
    text = ocr.prepare_input(text)
    outputString = ChatGPT_API_Interface.HomeworkHelpGenerator(text)
    print(outputString)
