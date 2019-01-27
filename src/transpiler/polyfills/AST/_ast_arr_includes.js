const arr_includesAST = {
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
          "name": "Array",
          "loc": {
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 5
            }
          }
        },
        "property": {
          "type": "Identifier",
          "name": "prototype",
          "loc": {
            "start": {
              "line": 6,
              "column": 6
            },
            "end": {
              "line": 6,
              "column": 15
            }
          }
        },
        "loc": {
          "start": {
            "line": 6,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 15
          }
        }
      },
      "property": {
        "type": "Identifier",
        "name": "includes",
        "loc": {
          "start": {
            "line": 6,
            "column": 16
          },
          "end": {
            "line": 6,
            "column": 24
          }
        }
      },
      "loc": {
        "start": {
          "line": 6,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 24
        }
      }
    },
    "right": {
      "type": "FunctionExpression",
      "id": null,
      "params": [
        {
          "type": "Identifier",
          "name": "searchStr",
          "loc": {
            "start": {
              "line": 6,
              "column": 36
            },
            "end": {
              "line": 6,
              "column": 45
            }
          }
        },
        {
          "type": "Identifier",
          "name": "fromIndex",
          "loc": {
            "start": {
              "line": 6,
              "column": 47
            },
            "end": {
              "line": 6,
              "column": 56
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "arr",
                  "loc": {
                    "start": {
                      "line": 7,
                      "column": 6
                    },
                    "end": {
                      "line": 7,
                      "column": 9
                    }
                  }
                },
                "init": {
                  "type": "ThisExpression",
                  "loc": {
                    "start": {
                      "line": 7,
                      "column": 12
                    },
                    "end": {
                      "line": 7,
                      "column": 16
                    }
                  }
                },
                "loc": {
                  "start": {
                    "line": 7,
                    "column": 6
                  },
                  "end": {
                    "line": 7,
                    "column": 16
                  }
                }
              }
            ],
            "kind": "var",
            "loc": {
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 7,
                "column": 17
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
                  "name": "len",
                  "loc": {
                    "start": {
                      "line": 8,
                      "column": 6
                    },
                    "end": {
                      "line": 8,
                      "column": 9
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "arr",
                    "loc": {
                      "start": {
                        "line": 8,
                        "column": 12
                      },
                      "end": {
                        "line": 8,
                        "column": 15
                      }
                    }
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length",
                    "loc": {
                      "start": {
                        "line": 8,
                        "column": 16
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
                      "column": 12
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
                    "column": 6
                  },
                  "end": {
                    "line": 8,
                    "column": 22
                  }
                }
              }
            ],
            "kind": "var",
            "loc": {
              "start": {
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 23
              }
            }
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "name": "len",
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 6
                  },
                  "end": {
                    "line": 9,
                    "column": 9
                  }
                }
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "loc": {
                  "start": {
                    "line": 9,
                    "column": 13
                  },
                  "end": {
                    "line": 9,
                    "column": 14
                  }
                }
              },
              "loc": {
                "start": {
                  "line": 9,
                  "column": 6
                },
                "end": {
                  "line": 9,
                  "column": 14
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "loc": {
                      "start": {
                        "line": 10,
                        "column": 11
                      },
                      "end": {
                        "line": 10,
                        "column": 16
                      }
                    }
                  },
                  "loc": {
                    "start": {
                      "line": 10,
                      "column": 4
                    },
                    "end": {
                      "line": 10,
                      "column": 17
                    }
                  }
                }
              ],
              "loc": {
                "start": {
                  "line": 9,
                  "column": 16
                },
                "end": {
                  "line": 11,
                  "column": 3
                }
              }
            },
            "alternate": null,
            "loc": {
              "start": {
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 3
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
                "name": "fromIndex",
                "loc": {
                  "start": {
                    "line": 13,
                    "column": 2
                  },
                  "end": {
                    "line": 13,
                    "column": 11
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "Identifier",
                  "name": "fromIndex",
                  "loc": {
                    "start": {
                      "line": 13,
                      "column": 14
                    },
                    "end": {
                      "line": 13,
                      "column": 23
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "loc": {
                    "start": {
                      "line": 13,
                      "column": 27
                    },
                    "end": {
                      "line": 13,
                      "column": 28
                    }
                  }
                },
                "loc": {
                  "start": {
                    "line": 13,
                    "column": 14
                  },
                  "end": {
                    "line": 13,
                    "column": 28
                  }
                }
              },
              "loc": {
                "start": {
                  "line": 13,
                  "column": 2
                },
                "end": {
                  "line": 13,
                  "column": 28
                }
              }
            },
            "loc": {
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 13,
                "column": 29
              }
            }
          },
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
                        "line": 15,
                        "column": 11
                      },
                      "end": {
                        "line": 15,
                        "column": 12
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "fromIndex",
                    "loc": {
                      "start": {
                        "line": 15,
                        "column": 15
                      },
                      "end": {
                        "line": 15,
                        "column": 24
                      }
                    }
                  },
                  "loc": {
                    "start": {
                      "line": 15,
                      "column": 11
                    },
                    "end": {
                      "line": 15,
                      "column": 24
                    }
                  }
                }
              ],
              "kind": "var",
              "loc": {
                "start": {
                  "line": 15,
                  "column": 7
                },
                "end": {
                  "line": 15,
                  "column": 24
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
                    "line": 15,
                    "column": 26
                  },
                  "end": {
                    "line": 15,
                    "column": 27
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "name": "len",
                "loc": {
                  "start": {
                    "line": 15,
                    "column": 30
                  },
                  "end": {
                    "line": 15,
                    "column": 33
                  }
                }
              },
              "loc": {
                "start": {
                  "line": 15,
                  "column": 26
                },
                "end": {
                  "line": 15,
                  "column": 33
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
                    "line": 15,
                    "column": 35
                  },
                  "end": {
                    "line": 15,
                    "column": 36
                  }
                }
              },
              "prefix": false,
              "loc": {
                "start": {
                  "line": 15,
                  "column": 35
                },
                "end": {
                  "line": 15,
                  "column": 38
                }
              }
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "arr",
                        "loc": {
                          "start": {
                            "line": 16,
                            "column": 7
                          },
                          "end": {
                            "line": 16,
                            "column": 10
                          }
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "i",
                        "loc": {
                          "start": {
                            "line": 16,
                            "column": 11
                          },
                          "end": {
                            "line": 16,
                            "column": 12
                          }
                        }
                      },
                      "loc": {
                        "start": {
                          "line": 16,
                          "column": 7
                        },
                        "end": {
                          "line": 16,
                          "column": 13
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "searchStr",
                      "loc": {
                        "start": {
                          "line": 16,
                          "column": 17
                        },
                        "end": {
                          "line": 16,
                          "column": 26
                        }
                      }
                    },
                    "loc": {
                      "start": {
                        "line": 16,
                        "column": 7
                      },
                      "end": {
                        "line": 16,
                        "column": 26
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "loc": {
                            "start": {
                              "line": 17,
                              "column": 13
                            },
                            "end": {
                              "line": 17,
                              "column": 17
                            }
                          }
                        },
                        "loc": {
                          "start": {
                            "line": 17,
                            "column": 6
                          },
                          "end": {
                            "line": 17,
                            "column": 18
                          }
                        }
                      }
                    ],
                    "loc": {
                      "start": {
                        "line": 16,
                        "column": 28
                      },
                      "end": {
                        "line": 18,
                        "column": 5
                      }
                    }
                  },
                  "alternate": null,
                  "loc": {
                    "start": {
                      "line": 16,
                      "column": 4
                    },
                    "end": {
                      "line": 18,
                      "column": 5
                    }
                  }
                }
              ],
              "loc": {
                "start": {
                  "line": 15,
                  "column": 40
                },
                "end": {
                  "line": 19,
                  "column": 3
                }
              }
            },
            "loc": {
              "start": {
                "line": 15,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 3
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "loc": {
                "start": {
                  "line": 20,
                  "column": 9
                },
                "end": {
                  "line": 20,
                  "column": 14
                }
              }
            },
            "loc": {
              "start": {
                "line": 20,
                "column": 2
              },
              "end": {
                "line": 20,
                "column": 15
              }
            }
          }
        ],
        "loc": {
          "start": {
            "line": 6,
            "column": 58
          },
          "end": {
            "line": 21,
            "column": 1
          }
        }
      },
      "generator": false,
      "expression": false,
      "async": false,
      "loc": {
        "start": {
          "line": 6,
          "column": 27
        },
        "end": {
          "line": 21,
          "column": 1
        }
      }
    },
    "loc": {
      "start": {
        "line": 6,
        "column": 0
      },
      "end": {
        "line": 21,
        "column": 1
      }
    }
  },
  "loc": {
    "start": {
      "line": 6,
      "column": 0
    },
    "end": {
      "line": 21,
      "column": 1
    }
  }
}
module.exports = { arr_includesAST };

