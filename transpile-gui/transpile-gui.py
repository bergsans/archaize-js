#!/usr/bin/python3

from tkinter import filedialog
from tkinter import *
import os


HEIGHT = 200
WIDTH = 200

root = Tk()

canvas = Canvas(root, width=WIDTH, height=HEIGHT)
canvas.pack()

myLabel = Label(root, justify=LEFT, text="Archaize JS")
myLabel.pack()

def chooseFile():  
  filename = filedialog.askopenfilename(title="Select JS file", filetypes=(("JavaScript files", "*.js"), ("all files","*.*")))
  if len(filename) > 0:
    print(filename)
    file = filename.split("/")
    this_file = file[len(file) - 1]
    this_folder = filename[ :len(filename) - len(file)]
    new_file = "%s/_%s" % (this_folder, this_file)
    print(this_file)
    print(this_folder)
    cm = "../src/archaize.js -i %s -o %s --transpile" % (filename, new_file)
    os.system(cm)
  else:
    print("No file selected")
  
btn = Button(root, text ="Transpile file", bd=1, relief="ridge", command = chooseFile)
btn.pack()


root.mainloop()

