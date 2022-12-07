#!/bin/python3
"""
This module exists to form a bridge between frontend and database
"""

import boto3
from flask import Flask, jsonify, request

# Table Name
TABLE_NAME = 'HelloWorldDatabase'
# dynamodb client
dynamodb_client = boto3.client('dynamodb')

# for frontend
app = Flask(__name__)

@app.route('/execute_sql', methods=['POST'])
def execute_sql(statement: str):
    """
    this function gets cmd from frontend,
    and executes it on the database
    """
    response = dynamodb_client.execute_statement(Statememt = statement)
    return jsonify(response)

def put_item(item_put):
    """
    put json item to database
    """
    response = dynamodb_client.put_item(TableName = TABLE_NAME, Item = item_put)
    return response

def get_item(item_get: str) -> list:
    """
    this function retrieves data from database,
    and pass it to frontend
    """
    response = dynamodb_client.get_item(TableName = TABLE_NAME, Key = item_get)
    return response

def delete_item(item_del: str) -> list:
    """
    this function retrieves data from database,
    and pass it to frontend
    """
    response = dynamodb_client.delete_item(TableName = TABLE_NAME, Key = item_del)
    return response

@app.route('/insert', methods=['POST'])
def insert() -> None:
    """
    This function takes in a dict,
    determines the table and item data,
    and save the item data to the table
    """
    data = request.get_json()
    item_data = {}
    for parameter in data:
        if parameter.lower() == "table":
            table = data[parameter]
        else:
            item_data[parameter] = {"S": data[parameter]}
    response = dynamodb_client.put_item(TableName = TABLE_NAME, Item = item_data)
    return response

@app.route('/select', methods=['POST'])
def select():
    """
    This function takes in a dict,
    determines the table and id,
    and retrieves the item by id from the table
    """
    data = request.get_json()
    item_data = {}
    table = data["table"]
    item_id = {
            "Rkey": {"S": data["Rkey"]}
            }
    response = dynamodb_client.get_item(TableName = table, Key = item_id)
    return response

@app.route('/update', methods=['POST'])
def update():
    """
    This function takes in a dict,
    determines the table and id,
    and deletes the item by id from the table
    """
    data = request.get_json()
    item_data = {}
    table = data["table"]
    item_id = {
            "Rkey": {"S": data["Rkey"]}
            }
    retrieve_response = dynamodb_client.get_item(TableName = table, Key = item_id)
    item = retrieve_response["Item"]
    for parameter in data:
        if parameter == "table" or parameter == "Rkey":
            continue
        item[parameter] = {"S": data[parameter]}
    response = dynamodb_client.put_item(TableName = TABLE_NAME, Item = item)
    return response

@app.route('/delete', methods=['POST'])
def delete():
    data = request.get_json()
    item_data = {}
    table = data["table"]
    item_id = {
            "Rkey": {"S": data["Rkey"]}
            }
    response = dynamodb_client.delete_item(TableName = table, Key = item_id)
    return response
    pass

if __name__ == "__main__":
    tmp_dict = {
            "ID": {"S": "judith"},
            "nickname": {"S": "9d4"}
            }
    rsp = put_item(tmp_dict)
    print(rsp)
    print("="*60)
    rsp = get_item({"ID":{"S":"judith"}})
    print(rsp['Item'])
    print("="*60)
    rsp = delete_item({"ID":{"S":"judith"}})
    print(rsp)
