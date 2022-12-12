#!/usr/bin/env python
"""
this module exists to figure out how to get python to listen to js
"""

from flask import Flask, jsonify, request

app = Flask(__name__)

def dummy_true() -> bool:
    """
    This function does nothing but return True
    """
    return True

def dummy_false() -> bool:
    """
    This function does nothing but return False
    """
    return False

def dummy_zero() -> int:
    """
    This function does nothing but return zero
    """
    return 0

def function_router(input_data: list):
    """
    A function to return either dummy_true(), dummy_false(), or dummy_zero()
    based on the first input
    """
    print(f"Input type: {type(input_data[0])}")
    if isinstance(input_data[0], str):
        if input_data[0].lower() == "true":
            return dummy_true()
        if input_data[0].lower() == "false":
            return dummy_false()
    if isinstance(input_data[0], bool):
        if input_data[0]:
            return dummy_true()
        return dummy_false()
    return dummy_zero()

@app.route('/test', methods=['POST', 'GET'])
def route():
    """
    this function listens to the frontend
    """
    if request.method == "POST":
        data = request.get_json()
        parameters = []
        for item in data:
            parameters.append(data[item])
        return jsonify(function_router(parameters))

    if request.method == "GET":
        print("GET not supported!")
        return None
    return None


if __name__ == "__main__":
    pass
