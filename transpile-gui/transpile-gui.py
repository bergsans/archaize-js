#!/usr/bin/python3

from tkinter import filedialog
from tkinter import *
import os

root = Tk()

canvas = Canvas(root, width=200, height=200)
canvas.pack()

myLabel = Label(root, justify=LEFT, text="Archaize JS")
myLabel.pack()

def chooseFile():  
  filename = filedialog.askopenfilename(title="Select JS file", filetypes=(("JavaScript files", "*.js"), ("all files","*.*")))
  if len(filename) == 0:
    print("No file selected")
  else:
    print(filename)
    path = filename.split("/")
    this_file = path[len(path) - 1]
    this_folder = filename[ :len(filename) - len(this_file)]
    new_file = "{0:s}_{1:s}".format(this_folder, this_file)
    command = "../src/archaize.js -i {0:s} -o {1:s} --transpile".format(filename, new_file)
    os.system(command)
  
btn = Button(root, text ="Transpile file", bd=1, relief="ridge", command = chooseFile)
btn.pack()


root.mainloop()

