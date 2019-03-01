#!/usr/bin/python3

from PIL import Image, ImageTk
from tkinter import messagebox, filedialog
from tkinter import Tk, Button, Canvas, Label
import os

# Funcion archaize
def archaize(option):  
  filename = filedialog.askopenfilename(title="Select JS file", filetypes=(("JavaScript files", "*.js"), ("all files","*.*")))
  if len(filename) == 0:
    messagebox.showwarning("No file selected", "No transpilation :(")    
  else:
    print(filename)
    path = filename.split("/")
    this_file = path[len(path) - 1]
    this_folder = filename[ :len(filename) - len(this_file)]
    new_file = "{0:s}_{1:s}".format(this_folder, this_file)
    command_to_os = "../src/archaize.js -i {0:s} -o {1:s} {2:s}".format(filename, new_file, option)
    result = os.system(command_to_os)
    if result == 0: # Mind this! This only checks the programs exit code and say nothing about the success and failure per se.
      action = ""
      if option == "--transpile":
        action = "transpiled"
      elif option == "--ast":
        action = "saved as AST"
      else:
        action = "FAIL"
      info_msg = "File {0:s}.".format(action)
      messagebox.showinfo("Success", info_msg)
    else: # Mind this! This checks ONLY for non-success exit codes.
      messagebox.showerror("Epic ERROR.", "Something went wrong.")

# Main 
root = Tk()

canvas = Canvas(root, width=250, height=50)
canvas.pack()

image = Image.open("../assets/logo.png")
display = ImageTk.PhotoImage(image)
logo = Label(root, image=display)
logo.pack()

infoOnArchaizeJS = Label(root, text="Archaize JS v. 0.7")
infoOnArchaizeJS.pack()

btnTranspile = Button(root, text ="Transpile file", command = lambda:archaize("--transpile"))
btnTranspile.pack()

btnAST = Button(root, text="Make AST from file", command = lambda:archaize("--ast"))
btnAST.pack()

root.mainloop()

