#!/bin/python3
"""
This module exists to form a bridge between frontend and database
"""

import boto3
from flask import Flask, jsonify

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

@app.route('/put_item', methods=['POST'])
def put_item(item_put):
    """
    put json item to database
    """
    response = dynamodb_client.put_item(TableName = TABLE_NAME, Item = item_put)
    return response

@app.route('/get_item', methods=['POST'])
def get_item(item_get: str) -> list:
    """
    this function retrieves data from database,
    and pass it to frontend
    """
    response = dynamodb_client.get_item(TableName = TABLE_NAME, Key = item_get)
    return response

if __name__ == "__main__":
    tmp_dict = {
            "ID": {"S": "judith"},
            "last_name": {"S": "lee"}
            }
    rsp = put_item(tmp_dict)
    print(rsp)
    print("="*60)
    rsp = get_item({"ID":{"S":"partition_key"}})
    print(rsp['Item'])
