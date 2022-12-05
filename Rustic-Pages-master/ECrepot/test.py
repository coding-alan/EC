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

def main(*args):
    """
    A function to return either dummy_true(), dummy_false(), or dummy_zero()
    based on the first input
    """
    print(f"Input type: {type(args[0])}")
    if isinstance(args[0], str):
        if args[0].lower() == "true":
            return dummy_true()
        if args[0].lower() == "false":
            return dummy_false()
    if isinstance(args[0], bool):
        if args[0]:
            return dummy_true()
        return dummy_false()
    return dummy_zero()

if __name__ == "__main__":
    main()
