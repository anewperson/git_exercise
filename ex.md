Git Exercise
============

Basics
------

### Initializing a local repo

Whenever we start a new project from scratch or have an existing project and just want to turn it into a repository.

1. Create and \ or navigate the command line to the folder you want initialized.
2. Initialize a new repo.
3. Create a new file.  
    You can use `echo Hello_World>> new_file.txt` to quickly create a new file.
4. Stage (add it to the index) and commit it.

### Cloning a repo

Whenever we have a remote repository that we'd like to have a copy of, and possibly start uploading changes to.

1. Clone this remote repository:  
    `https://github.com/mastern2k3/git_exercise.git`
2. Create, stage and commit a new file.


-------------------------------


### Initializing a local repo

1. Create and \ or navigate the command line to the folder you want initialized.   
2. Initialize a new repo.
	```
	mkdir my_new_repo
	cd my_new_repo
	
	git init
	
	# or 
	
	git init my_new_repo
	cd my_new_repo
	```
3. Create a new file.  
	```
	echo Hello_World>> new_file.txt
	```
   
4. Stage (add it to the index) and commit it.
	```
	git add new_file.txt
	
	git status
	
	git commit
	```
   
### Cloning a repo

Whenever we have a remote repository that we'd like to have a copy of, and possibly start uploading changes to.

1. Clone this remote repository:  
    `https://github.com/mastern2k3/git_exercise.git`
	```
	git clone https://github.com/mastern2k3/git_exercise.git
	
	cd git_exercise
	```
	
2. Create, stage and commit a new file.
	```
	echo Hello_World>> new_file.txt
	
	git add new_file.txt
	
	git status
	
	git commit
	```
