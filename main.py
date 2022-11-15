import sqlite3
import json
import pandas as pd

test = []
with open('final_data_new.json') as f:
    for js in f:
        d = json.loads(js)
        test.append(d)
# print(test[0][0])
connection = sqlite3.connect('testDb.db')
cursor = connection.cursor()
# cursor.execute('Create Table if not exists Game (row_id INTEGER,name Text, publisher Text, developer Text, date Text)')
# cursor.execute('Create Table if not exists Requirements (processor Text, memory Text, graphics Text, os Text)')
# cursor.execute('Create Table if not exists Information (id INTEGER,description TEXT, tags Text, Category Text)')
columns1 = ['name', 'publisher', 'developer', 'date']
for i in range(0, len(test[0])):
    values = []
    for c in columns1:
        if c not in test[0][i]:
            values.append('Indie/Own/No value')
        else:
            values.append(test[0][i][c])
    cursor.execute('Insert or ignore into Game values(?,?,?,?)', values)
columns2 = ['processor', 'memory', 'graphics', 'os']
# for i in range(0, len(test[0])):
#     values = []
#     for c in columns2:
#         if 'requirements' in test[0][i]:
#             if 'minimum' in test[0][i]['requirements']:
#                 if 'windows' in test[0][i]['requirements']['minimum']:
#                     row = test[0][i]['requirements']['minimum']['windows']
#                     values.append(row[c])
#                 else:
#                     values.append('No OS requirement')
#             else:
#                 values.append('No minimum requirements')
#         else:
#             values.append('No requirements')
#     cursor.execute('insert into Requirements values(?,?,?,?)', values)
columns3 = ['desc', 'popu_tags', 'categories']
for i in range(0, len(test[0])):
    values = [test[0][i]['name']]
    for c in columns3:
        if c == 'desc':
            if 'full_desc' in test[0][i]:
                values.append(test[0][i]['full_desc']['desc'])
            else:
                values.append('No description.')
        elif c == 'popu_tags':
            if 'popu_tags' in test[0][i]:
                temp = test[0][i]['popu_tags']
                temp = ','.join(temp)
                values.append(temp)
            else:
                values.append('No tags')
        else:
            if 'categories' in test[0][i]:
                temp = test[0][i]['categories']
                temp = ','.join(temp)
                values.append(temp)
            else:
                values.append('No category.')
    # print(type(values[0]))
    cursor.execute('insert or ignore into Information values(?,?,?,?)', values)
print('Task completed')
connection.commit()
connection.close()