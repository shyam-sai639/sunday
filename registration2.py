from tkinter import*
root = Tk()
Label(root,text="First Name: ").grid(padx=25,pady=2,row=0,column=0)
Label(root,text="Last Name : ").grid(row=1,column=0,padx=25,pady=25)
Label(root,text="Email     : ").grid(row=2,column=0,padx=25,pady=25)
first_name=Entry(root)
last_name=Entry(root)
email=Entry(root)
first_name.grid(row=0,column=1,padx=25,pady=25)
last_name.grid(row=1,column=1,padx=25,pady=25)
email.grid(row=2,column=1,padx=25,pady=25)
exit=Button(root,text="exit",width=10,height=10,command=root.destroy)
exit.grid(row=4,column=0,padx=25,pady=25)
root.mainloop()"# sunday" 
"# sunday" 
