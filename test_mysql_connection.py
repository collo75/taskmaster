import MySQLdb

try:
    db = MySQLdb.connect(host="localhost",    # your host, usually localhost
                         user="todo",         # your username
                         passwd="GRIMDIYoZO2Q0xuc",  # your password
                         db="taskmaster_db")        # name of the data base
    print("Connected to MySQL database")
except MySQLdb.Error as e:
    print(f"Error {e.args[0]}: {e.args[1]}")
finally:
    if 'db' in locals():
        db.close()
