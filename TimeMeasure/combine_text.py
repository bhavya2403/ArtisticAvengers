import glob

# import all the files with "daiict" prefix in it
files = glob.glob("C:/Users/bhavy/Downloads/daiict*")
files = [files[-1]] + files[:-1]
f_out = open('output.txt')

# print all the file contents combined in one file
# tot=0
for filename in files:
    with open(filename, 'r', encoding='utf8') as f:
        f_out.write(f'{f.readline()}\n')
        # tot += int(f.readline().split()[0])
# print(tot)

# Total number of time taken by the user can also be printed