Git Exercise
============

Basics with Console
-------------------

### Initializing a local repo

Whenever we start a new project from scratch or have an existing project and just want to turn it into a repository.

1. Create and / or navigate the command line to the folder you want initialized.

2. Initialize a new repo.

3. Create a new file.  
    You can use `echo Hello_World>> new_file.txt` to quickly create a new file.

4. Stage (add it to the index) and commit it.

### Branches, creating and swiching

Given an existing repository, creating a new feature branch, switching to and working on it.

1. Navigate the command line to the repo folder.

2. Create a new branch called `cool_new_feature`.

3. Switch to that branch (make sure you have no unstaged changes).  
	*Swithing branches while having unstaged changes will keep those changes after switching by default.*

4. Create a new file named `feature_file.cpp`, stage and commit it.

5. View the difference between the new branch you're currently on and the original one (`cool_new_feature` and `master`).

### Ignoring files with the `.gitignore` file

How to tell git to ignore certain files, like build artifacts, temporary backup files and whole folders.

1. Navigate the command line to the repo folder.

2. Create a new file named `program.exe`.

3. Run `git status` and notice git has marked the new file as an unstaged change.

4. Create a `.gitignore` file and use it to ignore all `.exe` files.

5. Run `git status` again to make sure that `program.exe` is no longer marked as an unstaged change.  
	*Although now you will have a new unstaged change for `.gitignore`.*

### Current authoring user and email



-----------------------------------------------------------


### Initializing a local repo

1. Create and / or navigate the command line to the folder you want initialized.   
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

### Branches, creating and swiching

1. Navigate the command line to the repo folder.
	```
	cd my_new_repo
	```
2. Create a new branch called `cool_new_feature`.
	```
	git branch cool_new_feature
	```
3. Switch to that branch (make sure you have no unstaged changes).  
	*Swithing branches while having unstaged changes will keep those changes after switching by default.*
	```
	git status
	
	git checkout cool_new_feature
	```
4. Create a new file named `feature_file.cpp`, stage and commit it.
	```
	echo foo bar cakes>> feature_file.cpp
	
	git add feature_file.cpp
	
	git commit -m "I added a new file!"
	```
5. View the difference between the new branch you're currently on and the original one (`cool_new_feature` and `master`).
	```
	git diff master..cool_new_feature
	
	# or in a short version
	
	git diff master..cool_new_feature --name-status
	```

### Ignoring files with the `.gitignore` file

1. Navigate the command line to the repo folder.
	```
	cd my_new_repo
	```
	
2. Create a new file named `program.exe`.
	```
	echo fake-exe>> program.exe
	```
	
3. Run `git status` and notice git has marked the new file as an unstaged change.
	```
	git status
	```
	
4. Create a `.gitignore` file and use it to ignore all `.exe` files.
	```
	echo *.exe>> .gitignore
	```
	
5. Run `git status` again to make sure that `program.exe` is no longer marked as an unstaged change.  
	*Although now you will have a new unstaged change for `.gitignore`.*
	```
	git status
	```

