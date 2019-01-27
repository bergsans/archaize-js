const repeatAST = {
  "type": "ExpressionStatement",
  "expression": {
    "type": "AssignmentExpression",
    "operator": "=",
    "left": {
      "type": "MemberExpression",
      "computed": false,
      "object": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "name": "String",
          "loc": {
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 6
            }
          }
        },
        "property": {
          "type": "Identifier",
          "name": "prototype",
          "loc": {
            "start": {
              "line": 5,
              "column": 7
            },
            "end": {
              "line": 5,
              "column": 16
            }
          }
        },
        "loc": {
          "start": {
            "line": 5,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 16
          }
        }
      },
      "property": {
        "type": "Identifier",
        "name": "repeat",
        "loc": {
          "start": {
            "line": 5,
            "column": 17
          },
          "end": {
            "line": 5,
            "column": 23
          }
        }
      },
      "loc": {
        "start": {
          "line": 5,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 23
        }
      }
    },
    "right": {
      "type": "FunctionExpression",
      "id": null,
      "params": [
        {
          "type": "Identifier",
          "name": "count",
          "loc": {
            "start": {
              "line": 5,
              "column": 35
            },
            "end": {
              "line": 5,
              "column": 40
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "name": "count",
                "loc": {
                  "start": {
                    "line": 6,
                    "column": 6
                  },
                  "end": {
                    "line": 6,
                    "column": 11
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "Number",
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 15
                    },
                    "end": {
                      "line": 6,
                      "column": 21
                    }
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "POSITIVE_INFINITY",
                  "loc": {
                    "start": {
                      "line": 6,
                      "column": 22
                    },
                    "end": {
                      "line": 6,
                      "column": 39
                    }
                  }
                },
                "loc": {
                  "start": {
                    "line": 6,
                    "column": 15
                  },
                  "end": {
                    "line": 6,
                    "column": 39
                  }
                }
              },
              "loc": {
                "start": {
                  "line": 6,
                  "column": 6
                },
                "end": {
                  "line": 6,
                  "column": 39
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "RangeError",
                      "loc": {
                        "start": {
                          "line": 7,
                          "column": 14
                        },
                        "end": {
                          "line": 7,
                          "column": 24
                        }
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Larger than Infinity.",
                        "raw": "'Larger than Infinity.'",
                        "loc": {
                          "start": {
                            "line": 7,
                            "column": 25
                          },
                          "end": {
                            "line": 7,
                            "column": 48
                          }
                        }
                      }
                    ],
                    "loc": {
                      "start": {
                        "line": 7,
                        "column": 10
                      },
                      "end": {
                        "line": 7,
                        "column": 49
                      }
                    }
                  },
                  "loc": {
                    "start": {
                      "line": 7,
                      "column": 4
                    },
                    "end": {
                      "line": 7,
                      "column": 50
                    }
                  }
                }
              ],
              "loc": {
                "start": {
                  "line": 6,
                  "column": 41
                },
                "end": {
                  "line": 8,
                  "column": 3
                }
              }
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "name": "count",
                  "loc": {
                    "start": {
                      "line": 8,
                      "column": 13
                    },
                    "end": {
                      "line": 8,
                      "column": 18
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "loc": {
                    "start": {
                      "line": 8,
                      "column": 21
                    },
                    "end": {
                      "line": 8,
                      "column": 22
                    }
                  }
                },
                "loc": {
                  "start": {
                    "line": 8,
                    "column": 13
                  },
                  "end": {
                    "line": 8,
                    "column": 22
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "RangeError",
                        "loc": {
                          "start": {
                            "line": 9,
                            "column": 14
                          },
                          "end": {
                            "line": 9,
                            "column": 24
                          }
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "Negative number",
                          "raw": "'Negative number'",
                          "loc": {
                            "start": {
                              "line": 9,
                              "column": 25
                            },
                            "end": {
                              "line": 9,
                              "column": 42
                            }
                          }
                        }
                      ],
                      "loc": {
                        "start": {
                          "line": 9,
                          "column": 10
                        },
                        "end": {
                          "line": 9,
                          "column": 43
                        }
                      }
                    },
                    "loc": {
                      "start": {
                        "line": 9,
                        "column": 4
                      },
                      "end": {
                        "line": 9,
                        "column": 44
                      }
                    }
                  }
                ],
                "loc": {
                  "start": {
                    "line": 8,
                    "column": 24
                  },
                  "end": {
                    "line": 10,
                    "column": 3
                  }
                }
              },
              "alternate": null,
              "loc": {
                "start": {
                  "line": 8,
                  "column": 9
                },
                "end": {
                  "line": 10,
                  "column": 3
                }
              }
            },
            "loc": {
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 10,
                "column": 3
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "string",
                  "loc": {
                    "start": {
                      "line": 12,
                      "column": 6
                    },
                    "end": {
                      "line": 12,
                      "column": 12
                    }
                  }
                },
                "init": {
                  "type": "ThisExpression",
                  "loc": {
                    "start": {
                      "line": 12,
                      "column": 15
                    },
                    "end": {
                      "line": 12,
                      "column": 19
                    }
                  }
                },
                "loc": {
                  "start": {
                    "line": 12,
                    "column": 6
                  },
                  "end": {
                    "line": 12,
                    "column": 19
                  }
                }
              }
            ],
            "kind": "var",
            "loc": {
              "start": {
                "line": 12,
                "column": 2
              },
              "end": {
                "line": 12,
                "column": 20
              }
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "!=",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "name": "count",
                  "loc": {
                    "start": {
                      "line": 13,
                      "column": 13
                    },
                    "end": {
                      "line": 13,
                      "column": 18
                    }
                  }
                },
                "prefix": true,
                "loc": {
                  "start": {
                    "line": 13,
                    "column": 6
                  },
                  "end": {
                    "line": 13,
                    "column": 18
                  }
                }
              },
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "loc": {
                  "start": {
                    "line": 13,
                    "column": 22
                  },
                  "end": {
                    "line": 13,
                    "column": 30
                  }
                }
              },
              "loc": {
                "start": {
                  "line": 13,
                  "column": 6
                },
                "end": {
                  "line": 13,
                  "column": 30
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "TypeError",
                      "loc": {
                        "start": {
                          "line": 14,
                          "column": 14
                        },
                        "end": {
                          "line": 14,
                          "column": 23
                        }
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Not a number",
                        "raw": "'Not a number'",
                        "loc": {
                          "start": {
                            "line": 14,
                            "column": 24
                          },
                          "end": {
                            "line": 14,
                            "column": 38
                          }
                        }
                      }
                    ],
                    "loc": {
                      "start": {
                        "line": 14,
                        "column": 10
                      },
                      "end": {
                        "line": 14,
                        "column": 39
                      }
                    }
                  },
                  "loc": {
                    "start": {
                      "line": 14,
                      "column": 4
                    },
                    "end": {
                      "line": 14,
                      "column": 40
                    }
                  }
                }
              ],
              "loc": {
                "start": {
                  "line": 13,
                  "column": 32
                },
                "end": {
                  "line": 15,
                  "column": 3
                }
              }
            },
            "alternate": null,
            "loc": {
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 15,
                "column": 3
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "content",
                  "loc": {
                    "start": {
                      "line": 16,
                      "column": 6
                    },
                    "end": {
                      "line": 16,
                      "column": 13
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "name": "string",
                  "loc": {
                    "start": {
                      "line": 16,
                      "column": 16
                    },
                    "end": {
                      "line": 16,
                      "column": 22
                    }
                  }
                },
                "loc": {
                  "start": {
                    "line": 16,
                    "column": 6
                  },
                  "end": {
                    "line": 16,
                    "column": 22
                  }
                }
              }
            ],
            "kind": "var",
            "loc": {
              "start": {
                "line": 16,
                "column": 2
              },
              "end": {
                "line": 16,
                "column": 23
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "count",
                "loc": {
                  "start": {
                    "line": 17,
                    "column": 2
                  },
                  "end": {
                    "line": 17,
                    "column": 7
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "parseInt",
                  "loc": {
                    "start": {
                      "line": 17,
                      "column": 10
                    },
                    "end": {
                      "line": 17,
                      "column": 18
                    }
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "count",
                    "loc": {
                      "start": {
                        "line": 17,
                        "column": 19
                      },
                      "end": {
                        "line": 17,
                        "column": 24
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "loc": {
                      "start": {
                        "line": 17,
                        "column": 26
                      },
                      "end": {
                        "line": 17,
                        "column": 28
                      }
                    }
                  }
                ],
                "loc": {
                  "start": {
                    "line": 17,
                    "column": 10
                  },
                  "end": {
                    "line": 17,
                    "column": 29
                  }
                }
              },
              "loc": {
                "start": {
                  "line": 17,
                  "column": 2
                },
                "end": {
                  "line": 17,
                  "column": 29
                }
              }
            },
            "loc": {
              "start": {
                "line": 17,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 30
              }
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "Identifier",
                  "name": "count",
                  "loc": {
                    "start": {
                      "line": 18,
                      "column": 6
                    },
                    "end": {
                      "line": 18,
                      "column": 11
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "loc": {
                    "start": {
                      "line": 18,
                      "column": 14
                    },
                    "end": {
                      "line": 18,
                      "column": 15
                    }
                  }
                },
                "loc": {
                  "start": {
                    "line": 18,
                    "column": 6
                  },
                  "end": {
                    "line": 18,
                    "column": 15
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "name": "count",
                  "loc": {
                    "start": {
                      "line": 18,
                      "column": 19
                    },
                    "end": {
                      "line": 18,
                      "column": 24
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "Number",
                    "loc": {
                      "start": {
                        "line": 18,
                        "column": 27
                      },
                      "end": {
                        "line": 18,
                        "column": 33
                      }
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "POSITIVE_INFINITY",
                    "loc": {
                      "start": {
                        "line": 18,
                        "column": 34
                      },
                      "end": {
                        "line": 18,
                        "column": 51
                      }
                    }
                  },
                  "loc": {
                    "start": {
                      "line": 18,
                      "column": 27
                    },
                    "end": {
                      "line": 18,
                      "column": 51
                    }
                  }
                },
                "loc": {
                  "start": {
                    "line": 18,
                    "column": 19
                  },
                  "end": {
                    "line": 18,
                    "column": 51
                  }
                }
              },
              "loc": {
                "start": {
                  "line": 18,
                  "column": 6
                },
                "end": {
                  "line": 18,
                  "column": 51
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "i",
                          "loc": {
                            "start": {
                              "line": 19,
                              "column": 13
                            },
                            "end": {
                              "line": 19,
                              "column": 14
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "loc": {
                            "start": {
                              "line": 19,
                              "column": 17
                            },
                            "end": {
                              "line": 19,
                              "column": 18
                            }
                          }
                        },
                        "loc": {
                          "start": {
                            "line": 19,
                            "column": 13
                          },
                          "end": {
                            "line": 19,
                            "column": 18
                          }
                        }
                      }
                    ],
                    "kind": "var",
                    "loc": {
                      "start": {
                        "line": 19,
                        "column": 9
                      },
                      "end": {
                        "line": 19,
                        "column": 18
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "name": "i",
                      "loc": {
                        "start": {
                          "line": 19,
                          "column": 20
                        },
                        "end": {
                          "line": 19,
                          "column": 21
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "count",
                      "loc": {
                        "start": {
                          "line": 19,
                          "column": 24
                        },
                        "end": {
                          "line": 19,
                          "column": 29
                        }
                      }
                    },
                    "loc": {
                      "start": {
                        "line": 19,
                        "column": 20
                      },
                      "end": {
                        "line": 19,
                        "column": 29
                      }
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "argument": {
                      "type": "Identifier",
                      "name": "i",
                      "loc": {
                        "start": {
                          "line": 19,
                          "column": 31
                        },
                        "end": {
                          "line": 19,
                          "column": 32
                        }
                      }
                    },
                    "prefix": false,
                    "loc": {
                      "start": {
                        "line": 19,
                        "column": 31
                      },
                      "end": {
                        "line": 19,
                        "column": 34
                      }
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "name": "string",
                            "loc": {
                              "start": {
                                "line": 20,
                                "column": 6
                              },
                              "end": {
                                "line": 20,
                                "column": 12
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "content",
                            "loc": {
                              "start": {
                                "line": 20,
                                "column": 16
                              },
                              "end": {
                                "line": 20,
                                "column": 23
                              }
                            }
                          },
                          "loc": {
                            "start": {
                              "line": 20,
                              "column": 6
                            },
                            "end": {
                              "line": 20,
                              "column": 23
                            }
                          }
                        },
                        "loc": {
                          "start": {
                            "line": 20,
                            "column": 6
                          },
                          "end": {
                            "line": 20,
                            "column": 24
                          }
                        }
                      }
                    ],
                    "loc": {
                      "start": {
                        "line": 19,
                        "column": 36
                      },
                      "end": {
                        "line": 21,
                        "column": 5
                      }
                    }
                  },
                  "loc": {
                    "start": {
                      "line": 19,
                      "column": 4
                    },
                    "end": {
                      "line": 21,
                      "column": 5
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "string",
                    "loc": {
                      "start": {
                        "line": 22,
                        "column": 11
                      },
                      "end": {
                        "line": 22,
                        "column": 17
                      }
                    }
                  },
                  "loc": {
                    "start": {
                      "line": 22,
                      "column": 4
                    },
                    "end": {
                      "line": 22,
                      "column": 18
                    }
                  }
                }
              ],
              "loc": {
                "start": {
                  "line": 18,
                  "column": 53
                },
                "end": {
                  "line": 23,
                  "column": 3
                }
              }
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "name": "count",
                  "loc": {
                    "start": {
                      "line": 23,
                      "column": 13
                    },
                    "end": {
                      "line": 23,
                      "column": 18
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "loc": {
                    "start": {
                      "line": 23,
                      "column": 22
                    },
                    "end": {
                      "line": 23,
                      "column": 23
                    }
                  }
                },
                "loc": {
                  "start": {
                    "line": 23,
                    "column": 13
                  },
                  "end": {
                    "line": 23,
                    "column": 23
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "name": "content",
                      "loc": {
                        "start": {
                          "line": 24,
                          "column": 11
                        },
                        "end": {
                          "line": 24,
                          "column": 18
                        }
                      }
                    },
                    "loc": {
                      "start": {
                        "line": 24,
                        "column": 4
                      },
                      "end": {
                        "line": 24,
                        "column": 19
                      }
                    }
                  }
                ],
                "loc": {
                  "start": {
                    "line": 23,
                    "column": 25
                  },
                  "end": {
                    "line": 25,
                    "column": 3
                  }
                }
              },
              "alternate": null,
              "loc": {
                "start": {
                  "line": 23,
                  "column": 9
                },
                "end": {
                  "line": 25,
                  "column": 3
                }
              }
            },
            "loc": {
              "start": {
                "line": 18,
                "column": 2
              },
              "end": {
                "line": 25,
                "column": 3
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "name": "undefined",
              "loc": {
                "start": {
                  "line": 26,
                  "column": 9
                },
                "end": {
                  "line": 26,
                  "column": 18
                }
              }
            },
            "loc": {
              "start": {
                "line": 26,
                "column": 2
              },
              "end": {
                "line": 26,
                "column": 19
              }
            }
          }
        ],
        "loc": {
          "start": {
            "line": 5,
            "column": 42
          },
          "end": {
            "line": 27,
            "column": 1
          }
        }
      },
      "generator": false,
      "expression": false,
      "async": false,
      "loc": {
        "start": {
          "line": 5,
          "column": 26
        },
        "end": {
          "line": 27,
          "column": 1
        }
      }
    },
    "loc": {
      "start": {
        "line": 5,
        "column": 0
      },
      "end": {
        "line": 27,
        "column": 1
      }
    }
  },
  "loc": {
    "start": {
      "line": 5,
      "column": 0
    },
    "end": {
      "line": 27,
      "column": 1
    }
  }
}
module.exports = { repeatAST };

