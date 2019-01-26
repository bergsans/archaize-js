# On template literals


## Background

An Expression represents the production of some sort of 'value'. It can hold an 'immediate' 
value (a string, a number or some other data type like a boolean), or represent a value by 
a reference to a variable, a function or for instance a mathematical formula. 

A template literal in ES6 admits embedded expressions in strings. You can embed variables, 
functions or general expressions (for instance mathematics) - all kinds of expressions.

Let's begin by exemplifiing how template literals are used:

```
const firstName = "Luke";
const surName = "Skywalker";
const name = `${firstName} ${surName}`;
```

This contrasts with the old, pre-ES6 way of doing things. A transpiler whose task is to 'archaize' 
modern JavaScript must handle this change. With and before ES5, you would have to use a 
binary expression (a 'join') to manage the same kind of problem:

```
var firstName = "Luke";
var surName = "Skywalker";
var name = firstName + " " + surName;
```

### Problem 
This means, that between *each* expression a 'joining' procedure would have to
be in place. With the terminology of ESTree, you'd call this a 'Binary Expression'.
It could, of course, be some other kind of binary expression, if you handle non-strings
(3 - 2 and so on).

The syntax tree for template literals is a bit different from that of ordinary literals, 
that (if more than one) must be 'joined' by some kind of binary expression, 
usually with an additive logic. 

The problem at hand, therefore, is that if you want to write a polyfill for template 
literals you must gather necessary 'facts' from the part of the AST that uses template 
literals and convert those into literals, joining the (using a binary expression) 
included literals in a way compatible with ES5. 

Now consider this (ES5) code snippet.

```
var name = "C-M";
var str = "As of this date (" + Date() + "), I, " + name + ", (...)";
```

ESTree would produce an AST with the following structure:

```
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "name",
            "range": [
              4,
              8
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 8
              }
            }
          },
          "init": {
            "type": "Literal",
            "value": "C-M",
            "raw": "\"C-M\"",
            "range": [
              11,
              16
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 11
              },
              "end": {
                "line": 1,
                "column": 16
              }
            }
          },
          "range": [
            4,
            16
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 16
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        0,
        17
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
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
            "name": "str",
            "range": [
              22,
              25
            ],
            "loc": {
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 2,
                "column": 7
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "value": "As of this date (",
                    "raw": "\"As of this date (\"",
                    "range": [
                      28,
                      47
                    ],
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 10
                      },
                      "end": {
                        "line": 2,
                        "column": 29
                      }
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "Date",
                      "range": [
                        50,
                        54
                      ],
                      "loc": {
                        "start": {
                          "line": 2,
                          "column": 32
                        },
                        "end": {
                          "line": 2,
                          "column": 36
                        }
                      }
                    },
                    "arguments": [],
                    "range": [
                      50,
                      56
                    ],
                    "loc": {
                      "start": {
                        "line": 2,
                        "column": 32
                      },
                      "end": {
                        "line": 2,
                        "column": 38
                      }
                    }
                  },
                  "range": [
                    28,
                    56
                  ],
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 10
                    },
                    "end": {
                      "line": 2,
                      "column": 38
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": "), I, ",
                  "raw": "\"), I, \"",
                  "range": [
                    59,
                    67
                  ],
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 41
                    },
                    "end": {
                      "line": 2,
                      "column": 49
                    }
                  }
                },
                "range": [
                  28,
                  67
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 10
                  },
                  "end": {
                    "line": 2,
                    "column": 49
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "name": "name",
                "range": [
                  70,
                  74
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 52
                  },
                  "end": {
                    "line": 2,
                    "column": 56
                  }
                }
              },
              "range": [
                28,
                74
              ],
              "loc": {
                "start": {
                  "line": 2,
                  "column": 10
                },
                "end": {
                  "line": 2,
                  "column": 56
                }
              }
            },
            "right": {
              "type": "Literal",
              "value": ", (...)",
              "raw": "\", (...)\"",
              "range": [
                77,
                86
              ],
              "loc": {
                "start": {
                  "line": 2,
                  "column": 59
                },
                "end": {
                  "line": 2,
                  "column": 68
                }
              }
            },
            "range": [
              28,
              86
            ],
            "loc": {
              "start": {
                "line": 2,
                "column": 10
              },
              "end": {
                "line": 2,
                "column": 68
              }
            }
          },
          "range": [
            22,
            86
          ],
          "loc": {
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 2,
              "column": 68
            }
          }
        }
      ],
      "kind": "var",
      "range": [
        18,
        87
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 69
        }
      }
    }
  ],
  "sourceType": "script",
  "range": [
    0,
    87
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 2,
      "column": 69
    }
  },
  "comments": []
}
```

Written with ES6 (same 'meaning', different syntax):

```
let name = "C-M"
let str = `Hello ${name}!`;
```

This would produce quite a different AST: (1)

```
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "name": "name",
            "range": [
              4,
              8
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 8
              }
            }
          },
          "init": {
            "type": "Literal",
            "value": "C-M",
            "raw": "\"C-M\"",
            "range": [
              11,
              16
            ],
            "loc": {
              "start": {
                "line": 1,
                "column": 11
              },
              "end": {
                "line": 1,
                "column": 16
              }
            }
          },
          "range": [
            4,
            16
          ],
          "loc": {
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 16
            }
          }
        }
      ],
      "kind": "let",
      "range": [
        0,
        17
      ],
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
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
            "name": "str",
            "range": [
              22,
              25
            ],
            "loc": {
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 2,
                "column": 7
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "As of this date (",
                  "cooked": "As of this date ("
                },
                "tail": false,
                "range": [
                  28,
                  48
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 10
                  },
                  "end": {
                    "line": 2,
                    "column": 30
                  }
                }
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "), I, ",
                  "cooked": "), I, "
                },
                "tail": false,
                "range": [
                  54,
                  63
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 36
                  },
                  "end": {
                    "line": 2,
                    "column": 45
                  }
                }
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": ", (...)",
                  "cooked": ", (...)"
                },
                "tail": true,
                "range": [
                  67,
                  76
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 49
                  },
                  "end": {
                    "line": 2,
                    "column": 58
                  }
                }
              }
            ],
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Date",
                  "range": [
                    48,
                    52
                  ],
                  "loc": {
                    "start": {
                      "line": 2,
                      "column": 30
                    },
                    "end": {
                      "line": 2,
                      "column": 34
                    }
                  }
                },
                "arguments": [],
                "range": [
                  48,
                  54
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 30
                  },
                  "end": {
                    "line": 2,
                    "column": 36
                  }
                }
              },
              {
                "type": "Identifier",
                "name": "name",
                "range": [
                  63,
                  67
                ],
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 45
                  },
                  "end": {
                    "line": 2,
                    "column": 49
                  }
                }
              }
            ],
            "range": [
              28,
              76
            ],
            "loc": {
              "start": {
                "line": 2,
                "column": 10
              },
              "end": {
                "line": 2,
                "column": 58
              }
            }
          },
          "range": [
            22,
            76
          ],
          "loc": {
            "start": {
              "line": 2,
              "column": 4
            },
            "end": {
              "line": 2,
              "column": 58
            }
          }
        }
      ],
      "kind": "let",
      "range": [
        18,
        77
      ],
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 59
        }
      }
    }
  ],
  "sourceType": "script",
  "range": [
    0,
    77
  ],
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 2,
      "column": 59
    }
  },
  "comments": []
}

```

Luckily, you can use applications diff and sdiff to display the differences in a more
lucid manor. This problem took me some time to analyze and solve, but the solution was
in the end quite simple. To handle the problem you save the relevant parts (the values
and their location in the chain of expressions joined together) and convert them to the 
syntax of ES5 by traversing and transformaing each included value.

-------------------------------------------------------------------------------------
1) From now on, I will not include as lengthy AST's. But I thought it was important,
   as well as interesting, to do so with the feature described first.

