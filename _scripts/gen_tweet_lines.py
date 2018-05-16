import json
from datetime import datetime, timedelta

def main():
    f = open('../js/data.js').read()
    # Oops
    data = json.loads(f[11:-1])

    delta = timedelta(minutes=10)
    start = datetime(year=2018, month=5, day=16, hour=20)
    
    for j in range(3):
        start = start + timedelta(days=j)
        for i, d in enumerate(data):
            print("%s 【%d】%s" % ((start + i * delta).strftime("%Y/%m/%d %H:%M"), i + 1, d['abstract'].replace('\n', ' ')))

if __name__ == "__main__":
    main()
