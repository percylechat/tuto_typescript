import os
import pathlib


def remove_from_list(some_list, thing):
    while True:
        try:
            some_list.remove(thing)
        except ValueError:
            break
    return some_list


root = "."
result_files = []
result_go = []
result_py = []
result_yml = []
result_dto = []
result_dto_pkg = []
result_dto_pkg_lower = []
extensionsToCheck = (".go", ".py", ".yml")
for path, subdirs, files in os.walk(root):
    for name in files:
        file_path = str(pathlib.PurePath(path, name))
        if (
            file_path.endswith(extensionsToCheck)
            and ".git" not in file_path
            and ".xo." not in file_path
            and ".gomodel" not in file_path
            and ".pyc" not in file_path
            and "Analyze.py" not in file_path
        ):
            result_files.append(file_path)
            if ".go" in file_path:
                result_go.append(file_path)
                if "dto" in file_path:
                    result_dto.append(file_path)
                    result_dto_pkg.append(file_path.split("\\")[-1].replace(".go", ""))
                    result_dto_pkg_lower.append(
                        file_path.split("\\")[-1].replace(".go", "").lower()
                    )
            if ".py" in file_path:
                result_py.append(file_path)
            if ".yml" in file_path:
                result_yml.append(file_path)


print(result_dto_pkg)

todo = []
inseecode = []
panic = []
println = []
testerror = []
alex = []
bussiere = []
toto = []
for f in result_files:
    print(f)
    with open(f, "r", encoding="utf-8") as file1:
        lines = file1.readlines()
    i = 1
    for line in lines:
        line = line.strip()
        if "fmt.print" in line.lower():
            println.append(f + ";" + str(i) + ";" + line)
        if "panic(" in line.lower() and "//panic" not in line.lower():
            panic.append(f + ";" + str(i) + ";" + line)
        if "todo " in line.lower():
            todo.append(f + ";" + str(i) + ";" + line)
        if "codeinsee " in line.lower() or "code_insee" in line.lower():
            inseecode.append(f + ";" + str(i) + ";" + line)
        if "testerror" in line.lower():
            testerror.append(f + ";" + str(i) + ";" + line)
        if "alex" in line.lower():
            alex.append(f + ";" + str(i) + ";" + line)
        if "bussiere" in line.lower():
            bussiere.append(f + ";" + str(i) + ";" + line)
        if "toto" in line.lower():
            toto.append(f + ";" + str(i) + ";" + line)
        i += 1
        for package in result_dto_pkg:
            if package in line and package.lower() not in f.lower():
                remove_from_list(result_dto_pkg, package)


with open("report_todo.txt", "w") as filehandle:
    filehandle.writelines("%s\n" % td for td in todo)

with open("report_codeinsee.txt", "w") as filehandle:
    filehandle.writelines("%s\n" % ci for ci in inseecode)

with open("report_not_used.txt", "w") as filehandle:
    filehandle.writelines("%s\n" % dto for dto in result_dto_pkg)

with open("report_panic.txt", "w") as filehandle:
    filehandle.writelines("%s\n" % pani for pani in panic)

with open("report_print.txt", "w") as filehandle:
    filehandle.writelines("%s\n" % pri for pri in println)

with open("report_testerror.txt", "w") as filehandle:
    filehandle.writelines("%s\n" % teste for teste in testerror)


with open("report_alex.txt", "w") as filehandle:
    filehandle.writelines("%s\n" % alexandre for alexandre in alex)

with open("report_bussiere.txt", "w") as filehandle:
    filehandle.writelines("%s\n" % buss for buss in bussiere)

with open("report_toto.txt", "w") as filehandle:
    filehandle.writelines("%s\n" % buss for buss in toto)
