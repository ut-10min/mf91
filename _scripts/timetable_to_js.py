#!/usr/bin/env python3

import xlrd
import json
import sys

def main():
    if sys.argv != 2:
        print("Usage: %s excel_file" % sys.argv[0])
        sys.exit(1)

    tablefile = xlrd.open_workbook(sys.argv[1])
    tablesheet = tablefile.sheet_by_index(1)
    row_start = 2
    
    offset = 39274.0
    times = ["%02d:%02d" % xlrd.xldate_as_tuple(offset + d.value, 0)[3:5] for d in tablesheet.col(0)[row_start:]]
    
    for i in (1, 2):
        data = {k: v.value for k, v in zip(times, tablesheet.col(i)[row_start:])}
        print("var day%d = %s " % (i, json.dumps(data)))

if __name__ == "__main__":
    main()