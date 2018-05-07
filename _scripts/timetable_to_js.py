import xlrd
import json
import sys

def main():
    tablefile = xlrd.open_workbook(sys.argv[1])
    tablesheet = tablefile.sheet_by_index(1)
    row_start = 2
    
    offset = 39274.0
    times = ["%02d:%02d" % xlrd.xldate_as_tuple(39274 + d.value, 0)[3:5] for d in tablesheet.col(0)[row_start:]]
    
    for i in (1, 2):
        data = {k: v.value for k, v in zip(times, tablesheet.col(i)[row_start:])}
        print("var day%d = %s " % (i, json.dumps(data)))

if __name__ == "__main__":
    main()