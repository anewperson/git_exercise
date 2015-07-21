
Working with Branches
--------------------

### Cloning a repo and making off-site changes

Whenever we have a remote repository that we'd like to have a copy of, and possibly start uploading changes to.

1. Clone this remote repository:  
    `https://github.com/mastern2k3/git_exercise.git`

    ![cloning](images/clone_window.png)

2. Create a new branch called `my_branch`,  
    Use "Commands" -> "Create Branch..."

    ![create branch](images/create_branch.png)

3. Create, stage and commit a new file to `my_branch`.

### Rebasing my branch back on top of the `master` branch

Whenever the main branch has progressed after our feature branch and we want to make
it consistent with the latest changes.

1. Use the same repo from the previous exercise.

2. Switch back to the `master` branch,  
    *Notice the file we created earlier disappeared?*  
    Use "Commands" -> "Checkout branch..."

    ![create branch](images/switch_branch.png)

    Or just use the dropbox from the tool bar

3. Create, stage and commit a new file to `master`.

    ![branch is rooted behind the `master`](images/master_change.png)

    Now the `my_branch` branch is rooted behind the `master` branch.

4. Switch back to the `my_branch` branch.

5. Rebase it back on top of the `master` branch.

    ![rebasing `my_branch`](images/rebase.png)

6. Now the commits are neatly ordered.

    ![rebasing `my_branch`](images/rebase_passed.png)

### Merging off-site changes back into the `master` branch

When we're done working and we'd like to merge new commits back into the originating branch.

1. Use the same repo from the previous exercise.

2. Switch to the branch we want to **merge changes into** (`master`).

3. Merge `my_branch` back into `master`,  
    Use "Commands" -> "Merge branches..."

    ![merging `my_branch`](images/merge_branch.png)

4. Now `master` is aligned back together with the new commits from `my_branch`.

    ![merging `my_branch`](images/after_merge.png)
