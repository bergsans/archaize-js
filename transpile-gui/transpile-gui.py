#!/usr/bin/python3

from tkinter import messagebox
from tkinter import filedialog
from tkinter import *
import os

def chooseFile():  
  filename = filedialog.askopenfilename(title="Select JS file", filetypes=(("JavaScript files", "*.js"), ("all files","*.*")))
  if len(filename) == 0:
    messagebox.showwarning("No file selected", "No transpilation :(")    
  else:
    print(filename)
    path = filename.split("/")
    this_file = path[len(path) - 1]
    this_folder = filename[ :len(filename) - len(this_file)]
    new_file = "{0:s}_{1:s}".format(this_folder, this_file)
    command = "../src/archaize.js -i {0:s} -o {1:s} --transpile".format(filename, new_file)
    result = os.system(command)
    if result == 0: # Mind this! This only checks the programs exit code and say nothing about the success and failure per se.
      info_msg = "File {0:s} was transpiled into {1:s}".format(this_file, new_file)
      messagebox.showinfo("Success", info_msg)
    else: # Mind this! This checks ONLY for non-success exit codes.
      messagebox.showerror("Epic ERROR.", "Something went wrong.")

root = Tk()

canvas = Canvas(root, width=250, height=50)
canvas.pack()

myLabel = Label(root, text="Archaize JS v. 0.7")
myLabel.pack(side=LEFT)

btn = Button(root, text ="Transpile file", command = chooseFile)
btn.pack(side=RIGHT)

root.mainloop()

