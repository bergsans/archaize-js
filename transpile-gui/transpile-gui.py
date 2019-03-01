#!/usr/bin/python3

from PIL import Image, ImageTk
from tkinter import messagebox, filedialog
from tkinter import Tk, Button, Label
import os

# Funcion archaize
def archaize(option, actionInfo):  
    filename = filedialog.askopenfilename(title="Select JS file", filetypes=(("JavaScript files", "*.js"), ("all files","*.*")))
    if len(filename) == 0:
        return messagebox.showwarning("No file selected", "No transpilation :(")    

    print(filename)
    path = filename.split("/")
    this_file = path[len(path) - 1]
    this_folder = filename[ :len(filename) - len(this_file)]
    new_file = "{0:s}_{1:s}".format(this_folder, this_file)
    command_to_os = "../src/archaize.js -i {0:s} -o {1:s} {2:s}".format(filename, new_file, option)
    result = os.system(command_to_os)
    
    # Mind this: only checks exit code (something else than success/fail of transpilation)
    if result == 0:
        info_msg = "File {0:s}.".format(actionInfo)
        messagebox.showinfo("Success", info_msg)
    else:
        messagebox.showerror("Epic ERROR.", "Something went wrong.")

def clickTranspile():
    archaize("--transpile", " transpiled.")

def clickAST():
    archaize("--ast", " saved as AST.")

# Main 
root = Tk()

image = Image.open("../assets/logo.png")
display = ImageTk.PhotoImage(image)
logo = Label(root, image=display)
logo.pack()

btnTranspile = Button(root, text ="Transpile file", command = clickTranspile)
btnTranspile.pack()

btnAST = Button(root, text="Make AST from file", command = clickAST)
btnAST.pack()

root.mainloop()

