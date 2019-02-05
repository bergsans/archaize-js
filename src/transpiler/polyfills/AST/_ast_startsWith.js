const startsWithAST = {
  'type': 'ExpressionStatement',
  'expression': {
    'type': 'AssignmentExpression',
    'operator': '=',
    'left': {
      'type': 'MemberExpression',
      'computed': false,
      'object': {
        'type': 'MemberExpression',
        'computed': false,
        'object': {
          'type': 'Identifier',
          'name': 'String',
          'loc': {
            'start': {
              'line': 5,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 6
            }
          }
        },
        'property': {
          'type': 'Identifier',
          'name': 'prototype',
          'loc': {
            'start': {
              'line': 5,
              'column': 7
            },
            'end': {
              'line': 5,
              'column': 16
            }
          }
        },
        'loc': {
          'start': {
            'line': 5,
            'column': 0
          },
          'end': {
            'line': 5,
            'column': 16
          }
        }
      },
      'property': {
        'type': 'Identifier',
        'name': 'startsWith',
        'loc': {
          'start': {
            'line': 5,
            'column': 17
          },
          'end': {
            'line': 5,
            'column': 27
          }
        }
      },
      'loc': {
        'start': {
          'line': 5,
          'column': 0
        },
        'end': {
          'line': 5,
          'column': 27
        }
      }
    },
    'right': {
      'type': 'FunctionExpression',
      'id': null,
      'params': [
        {
          'type': 'Identifier',
          'name': 'searchStr',
          'loc': {
            'start': {
              'line': 5,
              'column': 39
            },
            'end': {
              'line': 5,
              'column': 48
            }
          }
        },
        {
          'type': 'Identifier',
          'name': 'position',
          'loc': {
            'start': {
              'line': 5,
              'column': 50
            },
            'end': {
              'line': 5,
              'column': 58
            }
          }
        }
      ],
      'body': {
        'type': 'BlockStatement',
        'body': [
          {
            'type': 'VariableDeclaration',
            'declarations': [
              {
                'type': 'VariableDeclarator',
                'id': {
                  'type': 'Identifier',
                  'name': 'string',
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 6
                    },
                    'end': {
                      'line': 6,
                      'column': 12
                    }
                  }
                },
                'init': {
                  'type': 'ThisExpression',
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 15
                    },
                    'end': {
                      'line': 6,
                      'column': 19
                    }
                  }
                },
                'loc': {
                  'start': {
                    'line': 6,
                    'column': 6
                  },
                  'end': {
                    'line': 6,
                    'column': 19
                  }
                }
              }
            ],
            'kind': 'var',
            'loc': {
              'start': {
                'line': 6,
                'column': 2
              },
              'end': {
                'line': 6,
                'column': 20
              }
            }
          },
          {
            'type': 'VariableDeclaration',
            'declarations': [
              {
                'type': 'VariableDeclarator',
                'id': {
                  'type': 'Identifier',
                  'name': 'len',
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 6
                    },
                    'end': {
                      'line': 7,
                      'column': 9
                    }
                  }
                },
                'init': {
                  'type': 'MemberExpression',
                  'computed': false,
                  'object': {
                    'type': 'Identifier',
                    'name': 'string',
                    'loc': {
                      'start': {
                        'line': 7,
                        'column': 12
                      },
                      'end': {
                        'line': 7,
                        'column': 18
                      }
                    }
                  },
                  'property': {
                    'type': 'Identifier',
                    'name': 'length',
                    'loc': {
                      'start': {
                        'line': 7,
                        'column': 19
                      },
                      'end': {
                        'line': 7,
                        'column': 25
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 12
                    },
                    'end': {
                      'line': 7,
                      'column': 25
                    }
                  }
                },
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 6
                  },
                  'end': {
                    'line': 7,
                    'column': 25
                  }
                }
              }
            ],
            'kind': 'var',
            'loc': {
              'start': {
                'line': 7,
                'column': 2
              },
              'end': {
                'line': 7,
                'column': 26
              }
            }
          },
          {
            'type': 'VariableDeclaration',
            'declarations': [
              {
                'type': 'VariableDeclarator',
                'id': {
                  'type': 'Identifier',
                  'name': 'searchStrLen',
                  'loc': {
                    'start': {
                      'line': 8,
                      'column': 6
                    },
                    'end': {
                      'line': 8,
                      'column': 18
                    }
                  }
                },
                'init': {
                  'type': 'MemberExpression',
                  'computed': false,
                  'object': {
                    'type': 'Identifier',
                    'name': 'searchStr',
                    'loc': {
                      'start': {
                        'line': 8,
                        'column': 21
                      },
                      'end': {
                        'line': 8,
                        'column': 30
                      }
                    }
                  },
                  'property': {
                    'type': 'Identifier',
                    'name': 'length',
                    'loc': {
                      'start': {
                        'line': 8,
                        'column': 31
                      },
                      'end': {
                        'line': 8,
                        'column': 37
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 8,
                      'column': 21
                    },
                    'end': {
                      'line': 8,
                      'column': 37
                    }
                  }
                },
                'loc': {
                  'start': {
                    'line': 8,
                    'column': 6
                  },
                  'end': {
                    'line': 8,
                    'column': 37
                  }
                }
              }
            ],
            'kind': 'var',
            'loc': {
              'start': {
                'line': 8,
                'column': 2
              },
              'end': {
                'line': 8,
                'column': 38
              }
            }
          },
          {
            'type': 'IfStatement',
            'test': {
              'type': 'Identifier',
              'name': 'position',
              'loc': {
                'start': {
                  'line': 10,
                  'column': 5
                },
                'end': {
                  'line': 10,
                  'column': 13
                }
              }
            },
            'consequent': {
              'type': 'BlockStatement',
              'body': [
                {
                  'type': 'IfStatement',
                  'test': {
                    'type': 'BinaryExpression',
                    'operator': '==',
                    'left': {
                      'type': 'UnaryExpression',
                      'operator': 'typeof',
                      'argument': {
                        'type': 'Identifier',
                        'name': 'position',
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 15
                          },
                          'end': {
                            'line': 11,
                            'column': 23
                          }
                        }
                      },
                      'prefix': true,
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 8
                        },
                        'end': {
                          'line': 11,
                          'column': 23
                        }
                      }
                    },
                    'right': {
                      'type': 'Literal',
                      'value': 'number',
                      'raw': '\'number\'',
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 27
                        },
                        'end': {
                          'line': 11,
                          'column': 35
                        }
                      }
                    },
                    'loc': {
                      'start': {
                        'line': 11,
                        'column': 8
                      },
                      'end': {
                        'line': 11,
                        'column': 35
                      }
                    }
                  },
                  'consequent': {
                    'type': 'BlockStatement',
                    'body': [
                      {
                        'type': 'ExpressionStatement',
                        'expression': {
                          'type': 'AssignmentExpression',
                          'operator': '=',
                          'left': {
                            'type': 'Identifier',
                            'name': 'position',
                            'loc': {
                              'start': {
                                'line': 12,
                                'column': 6
                              },
                              'end': {
                                'line': 12,
                                'column': 14
                              }
                            }
                          },
                          'right': {
                            'type': 'CallExpression',
                            'callee': {
                              'type': 'Identifier',
                              'name': 'parseInt',
                              'loc': {
                                'start': {
                                  'line': 12,
                                  'column': 17
                                },
                                'end': {
                                  'line': 12,
                                  'column': 25
                                }
                              }
                            },
                            'arguments': [
                              {
                                'type': 'Identifier',
                                'name': 'position',
                                'loc': {
                                  'start': {
                                    'line': 12,
                                    'column': 26
                                  },
                                  'end': {
                                    'line': 12,
                                    'column': 34
                                  }
                                }
                              },
                              {
                                'type': 'Literal',
                                'value': 10,
                                'raw': '10',
                                'loc': {
                                  'start': {
                                    'line': 12,
                                    'column': 36
                                  },
                                  'end': {
                                    'line': 12,
                                    'column': 38
                                  }
                                }
                              }
                            ],
                            'loc': {
                              'start': {
                                'line': 12,
                                'column': 17
                              },
                              'end': {
                                'line': 12,
                                'column': 39
                              }
                            }
                          },
                          'loc': {
                            'start': {
                              'line': 12,
                              'column': 6
                            },
                            'end': {
                              'line': 12,
                              'column': 39
                            }
                          }
                        },
                        'loc': {
                          'start': {
                            'line': 12,
                            'column': 6
                          },
                          'end': {
                            'line': 12,
                            'column': 40
                          }
                        }
                      },
                      {
                        'type': 'IfStatement',
                        'test': {
                          'type': 'BinaryExpression',
                          'operator': '<',
                          'left': {
                            'type': 'Identifier',
                            'name': 'position',
                            'loc': {
                              'start': {
                                'line': 13,
                                'column': 9
                              },
                              'end': {
                                'line': 13,
                                'column': 17
                              }
                            }
                          },
                          'right': {
                            'type': 'Literal',
                            'value': 0,
                            'raw': '0',
                            'loc': {
                              'start': {
                                'line': 13,
                                'column': 20
                              },
                              'end': {
                                'line': 13,
                                'column': 21
                              }
                            }
                          },
                          'loc': {
                            'start': {
                              'line': 13,
                              'column': 9
                            },
                            'end': {
                              'line': 13,
                              'column': 21
                            }
                          }
                        },
                        'consequent': {
                          'type': 'BlockStatement',
                          'body': [
                            {
                              'type': 'ThrowStatement',
                              'argument': {
                                'type': 'NewExpression',
                                'callee': {
                                  'type': 'Identifier',
                                  'name': 'RangeError',
                                  'loc': {
                                    'start': {
                                      'line': 14,
                                      'column': 18
                                    },
                                    'end': {
                                      'line': 14,
                                      'column': 28
                                    }
                                  }
                                },
                                'arguments': [
                                  {
                                    'type': 'Literal',
                                    'value': 'Negative number.',
                                    'raw': '\'Negative number.\'',
                                    'loc': {
                                      'start': {
                                        'line': 14,
                                        'column': 29
                                      },
                                      'end': {
                                        'line': 14,
                                        'column': 47
                                      }
                                    }
                                  }
                                ],
                                'loc': {
                                  'start': {
                                    'line': 14,
                                    'column': 14
                                  },
                                  'end': {
                                    'line': 14,
                                    'column': 48
                                  }
                                }
                              },
                              'loc': {
                                'start': {
                                  'line': 14,
                                  'column': 8
                                },
                                'end': {
                                  'line': 14,
                                  'column': 49
                                }
                              }
                            }
                          ],
                          'loc': {
                            'start': {
                              'line': 13,
                              'column': 23
                            },
                            'end': {
                              'line': 15,
                              'column': 7
                            }
                          }
                        },
                        'alternate': {
                          'type': 'IfStatement',
                          'test': {
                            'type': 'BinaryExpression',
                            'operator': '>',
                            'left': {
                              'type': 'BinaryExpression',
                              'operator': '+',
                              'left': {
                                'type': 'Identifier',
                                'name': 'position',
                                'loc': {
                                  'start': {
                                    'line': 15,
                                    'column': 17
                                  },
                                  'end': {
                                    'line': 15,
                                    'column': 25
                                  }
                                }
                              },
                              'right': {
                                'type': 'Identifier',
                                'name': 'searchStrLen',
                                'loc': {
                                  'start': {
                                    'line': 15,
                                    'column': 28
                                  },
                                  'end': {
                                    'line': 15,
                                    'column': 40
                                  }
                                }
                              },
                              'loc': {
                                'start': {
                                  'line': 15,
                                  'column': 17
                                },
                                'end': {
                                  'line': 15,
                                  'column': 40
                                }
                              }
                            },
                            'right': {
                              'type': 'Identifier',
                              'name': 'len',
                              'loc': {
                                'start': {
                                  'line': 15,
                                  'column': 44
                                },
                                'end': {
                                  'line': 15,
                                  'column': 47
                                }
                              }
                            },
                            'loc': {
                              'start': {
                                'line': 15,
                                'column': 16
                              },
                              'end': {
                                'line': 15,
                                'column': 47
                              }
                            }
                          },
                          'consequent': {
                            'type': 'BlockStatement',
                            'body': [
                              {
                                'type': 'ThrowStatement',
                                'argument': {
                                  'type': 'NewExpression',
                                  'callee': {
                                    'type': 'Identifier',
                                    'name': 'Error',
                                    'loc': {
                                      'start': {
                                        'line': 16,
                                        'column': 18
                                      },
                                      'end': {
                                        'line': 16,
                                        'column': 23
                                      }
                                    }
                                  },
                                  'arguments': [
                                    {
                                      'type': 'Literal',
                                      'value': 'Start position larger than string length',
                                      'raw': '\'Start position larger than string length\'',
                                      'loc': {
                                        'start': {
                                          'line': 16,
                                          'column': 24
                                        },
                                        'end': {
                                          'line': 16,
                                          'column': 66
                                        }
                                      }
                                    }
                                  ],
                                  'loc': {
                                    'start': {
                                      'line': 16,
                                      'column': 14
                                    },
                                    'end': {
                                      'line': 16,
                                      'column': 67
                                    }
                                  }
                                },
                                'loc': {
                                  'start': {
                                    'line': 16,
                                    'column': 8
                                  },
                                  'end': {
                                    'line': 16,
                                    'column': 68
                                  }
                                }
                              }
                            ],
                            'loc': {
                              'start': {
                                'line': 15,
                                'column': 49
                              },
                              'end': {
                                'line': 17,
                                'column': 7
                              }
                            }
                          },
                          'alternate': null,
                          'loc': {
                            'start': {
                              'line': 15,
                              'column': 13
                            },
                            'end': {
                              'line': 17,
                              'column': 7
                            }
                          }
                        },
                        'loc': {
                          'start': {
                            'line': 13,
                            'column': 6
                          },
                          'end': {
                            'line': 17,
                            'column': 7
                          }
                        }
                      }
                    ],
                    'loc': {
                      'start': {
                        'line': 11,
                        'column': 37
                      },
                      'end': {
                        'line': 18,
                        'column': 5
                      }
                    }
                  },
                  'alternate': {
                    'type': 'BlockStatement',
                    'body': [
                      {
                        'type': 'ThrowStatement',
                        'argument': {
                          'type': 'NewExpression',
                          'callee': {
                            'type': 'Identifier',
                            'name': 'TypeError',
                            'loc': {
                              'start': {
                                'line': 19,
                                'column': 16
                              },
                              'end': {
                                'line': 19,
                                'column': 25
                              }
                            }
                          },
                          'arguments': [
                            {
                              'type': 'Literal',
                              'value': 'Not a number',
                              'raw': '\'Not a number\'',
                              'loc': {
                                'start': {
                                  'line': 19,
                                  'column': 26
                                },
                                'end': {
                                  'line': 19,
                                  'column': 40
                                }
                              }
                            }
                          ],
                          'loc': {
                            'start': {
                              'line': 19,
                              'column': 12
                            },
                            'end': {
                              'line': 19,
                              'column': 41
                            }
                          }
                        },
                        'loc': {
                          'start': {
                            'line': 19,
                            'column': 6
                          },
                          'end': {
                            'line': 19,
                            'column': 42
                          }
                        }
                      }
                    ],
                    'loc': {
                      'start': {
                        'line': 18,
                        'column': 11
                      },
                      'end': {
                        'line': 20,
                        'column': 5
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 11,
                      'column': 4
                    },
                    'end': {
                      'line': 20,
                      'column': 5
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 10,
                  'column': 15
                },
                'end': {
                  'line': 21,
                  'column': 3
                }
              }
            },
            'alternate': {
              'type': 'BlockStatement',
              'body': [
                {
                  'type': 'ExpressionStatement',
                  'expression': {
                    'type': 'AssignmentExpression',
                    'operator': '=',
                    'left': {
                      'type': 'Identifier',
                      'name': 'position',
                      'loc': {
                        'start': {
                          'line': 22,
                          'column': 4
                        },
                        'end': {
                          'line': 22,
                          'column': 12
                        }
                      }
                    },
                    'right': {
                      'type': 'Literal',
                      'value': 0,
                      'raw': '0',
                      'loc': {
                        'start': {
                          'line': 22,
                          'column': 15
                        },
                        'end': {
                          'line': 22,
                          'column': 16
                        }
                      }
                    },
                    'loc': {
                      'start': {
                        'line': 22,
                        'column': 4
                      },
                      'end': {
                        'line': 22,
                        'column': 16
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 22,
                      'column': 4
                    },
                    'end': {
                      'line': 22,
                      'column': 17
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 21,
                  'column': 9
                },
                'end': {
                  'line': 23,
                  'column': 3
                }
              }
            },
            'loc': {
              'start': {
                'line': 10,
                'column': 2
              },
              'end': {
                'line': 23,
                'column': 3
              }
            }
          },
          {
            'type': 'VariableDeclaration',
            'declarations': [
              {
                'type': 'VariableDeclarator',
                'id': {
                  'type': 'Identifier',
                  'name': 'compareString',
                  'loc': {
                    'start': {
                      'line': 25,
                      'column': 6
                    },
                    'end': {
                      'line': 25,
                      'column': 19
                    }
                  }
                },
                'init': {
                  'type': 'CallExpression',
                  'callee': {
                    'type': 'MemberExpression',
                    'computed': false,
                    'object': {
                      'type': 'Identifier',
                      'name': 'string',
                      'loc': {
                        'start': {
                          'line': 25,
                          'column': 22
                        },
                        'end': {
                          'line': 25,
                          'column': 28
                        }
                      }
                    },
                    'property': {
                      'type': 'Identifier',
                      'name': 'slice',
                      'loc': {
                        'start': {
                          'line': 25,
                          'column': 29
                        },
                        'end': {
                          'line': 25,
                          'column': 34
                        }
                      }
                    },
                    'loc': {
                      'start': {
                        'line': 25,
                        'column': 22
                      },
                      'end': {
                        'line': 25,
                        'column': 34
                      }
                    }
                  },
                  'arguments': [
                    {
                      'type': 'Identifier',
                      'name': 'position',
                      'loc': {
                        'start': {
                          'line': 25,
                          'column': 35
                        },
                        'end': {
                          'line': 25,
                          'column': 43
                        }
                      }
                    },
                    {
                      'type': 'Identifier',
                      'name': 'searchStrLen',
                      'loc': {
                        'start': {
                          'line': 25,
                          'column': 45
                        },
                        'end': {
                          'line': 25,
                          'column': 57
                        }
                      }
                    }
                  ],
                  'loc': {
                    'start': {
                      'line': 25,
                      'column': 22
                    },
                    'end': {
                      'line': 25,
                      'column': 58
                    }
                  }
                },
                'loc': {
                  'start': {
                    'line': 25,
                    'column': 6
                  },
                  'end': {
                    'line': 25,
                    'column': 58
                  }
                }
              }
            ],
            'kind': 'var',
            'loc': {
              'start': {
                'line': 25,
                'column': 2
              },
              'end': {
                'line': 25,
                'column': 59
              }
            }
          },
          {
            'type': 'IfStatement',
            'test': {
              'type': 'BinaryExpression',
              'operator': '==',
              'left': {
                'type': 'Identifier',
                'name': 'compareString',
                'loc': {
                  'start': {
                    'line': 27,
                    'column': 5
                  },
                  'end': {
                    'line': 27,
                    'column': 18
                  }
                }
              },
              'right': {
                'type': 'Identifier',
                'name': 'searchStr',
                'loc': {
                  'start': {
                    'line': 27,
                    'column': 22
                  },
                  'end': {
                    'line': 27,
                    'column': 31
                  }
                }
              },
              'loc': {
                'start': {
                  'line': 27,
                  'column': 5
                },
                'end': {
                  'line': 27,
                  'column': 31
                }
              }
            },
            'consequent': {
              'type': 'BlockStatement',
              'body': [
                {
                  'type': 'ReturnStatement',
                  'argument': {
                    'type': 'Literal',
                    'value': true,
                    'raw': 'true',
                    'loc': {
                      'start': {
                        'line': 28,
                        'column': 11
                      },
                      'end': {
                        'line': 28,
                        'column': 15
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 28,
                      'column': 4
                    },
                    'end': {
                      'line': 28,
                      'column': 16
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 27,
                  'column': 33
                },
                'end': {
                  'line': 29,
                  'column': 3
                }
              }
            },
            'alternate': {
              'type': 'BlockStatement',
              'body': [
                {
                  'type': 'ReturnStatement',
                  'argument': {
                    'type': 'Literal',
                    'value': false,
                    'raw': 'false',
                    'loc': {
                      'start': {
                        'line': 30,
                        'column': 11
                      },
                      'end': {
                        'line': 30,
                        'column': 16
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 30,
                      'column': 4
                    },
                    'end': {
                      'line': 30,
                      'column': 17
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 29,
                  'column': 9
                },
                'end': {
                  'line': 31,
                  'column': 3
                }
              }
            },
            'loc': {
              'start': {
                'line': 27,
                'column': 2
              },
              'end': {
                'line': 31,
                'column': 3
              }
            }
          }
        ],
        'loc': {
          'start': {
            'line': 5,
            'column': 60
          },
          'end': {
            'line': 32,
            'column': 1
          }
        }
      },
      'generator': false,
      'expression': false,
      'async': false,
      'loc': {
        'start': {
          'line': 5,
          'column': 30
        },
        'end': {
          'line': 32,
          'column': 1
        }
      }
    },
    'loc': {
      'start': {
        'line': 5,
        'column': 0
      },
      'end': {
        'line': 32,
        'column': 1
      }
    }
  },
  'loc': {
    'start': {
      'line': 5,
      'column': 0
    },
    'end': {
      'line': 32,
      'column': 1
    }
  }
};
module.exports = { startsWithAST };

