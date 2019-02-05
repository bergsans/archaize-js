const endsWithAST = {
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
        'name': 'endsWith',
        'loc': {
          'start': {
            'line': 5,
            'column': 17
          },
          'end': {
            'line': 5,
            'column': 25
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
          'column': 25
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
              'column': 37
            },
            'end': {
              'line': 5,
              'column': 46
            }
          }
        },
        {
          'type': 'Identifier',
          'name': 'endPosition',
          'loc': {
            'start': {
              'line': 5,
              'column': 48
            },
            'end': {
              'line': 5,
              'column': 59
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
            'type': 'ExpressionStatement',
            'expression': {
              'type': 'AssignmentExpression',
              'operator': '=',
              'left': {
                'type': 'Identifier',
                'name': 'endPosition',
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 2
                  },
                  'end': {
                    'line': 7,
                    'column': 13
                  }
                }
              },
              'right': {
                'type': 'LogicalExpression',
                'operator': '||',
                'left': {
                  'type': 'Identifier',
                  'name': 'endPosition',
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 16
                    },
                    'end': {
                      'line': 7,
                      'column': 27
                    }
                  }
                },
                'right': {
                  'type': 'MemberExpression',
                  'computed': false,
                  'object': {
                    'type': 'Identifier',
                    'name': 'string',
                    'loc': {
                      'start': {
                        'line': 7,
                        'column': 31
                      },
                      'end': {
                        'line': 7,
                        'column': 37
                      }
                    }
                  },
                  'property': {
                    'type': 'Identifier',
                    'name': 'length',
                    'loc': {
                      'start': {
                        'line': 7,
                        'column': 38
                      },
                      'end': {
                        'line': 7,
                        'column': 44
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 7,
                      'column': 31
                    },
                    'end': {
                      'line': 7,
                      'column': 44
                    }
                  }
                },
                'loc': {
                  'start': {
                    'line': 7,
                    'column': 16
                  },
                  'end': {
                    'line': 7,
                    'column': 44
                  }
                }
              },
              'loc': {
                'start': {
                  'line': 7,
                  'column': 2
                },
                'end': {
                  'line': 7,
                  'column': 44
                }
              }
            },
            'loc': {
              'start': {
                'line': 7,
                'column': 2
              },
              'end': {
                'line': 7,
                'column': 45
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
                  'name': 'searchLength',
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
              'type': 'BinaryExpression',
              'operator': '!=',
              'left': {
                'type': 'UnaryExpression',
                'operator': 'typeof',
                'argument': {
                  'type': 'Identifier',
                  'name': 'searchStr',
                  'loc': {
                    'start': {
                      'line': 10,
                      'column': 12
                    },
                    'end': {
                      'line': 10,
                      'column': 21
                    }
                  }
                },
                'prefix': true,
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 5
                  },
                  'end': {
                    'line': 10,
                    'column': 21
                  }
                }
              },
              'right': {
                'type': 'Literal',
                'value': 'string',
                'raw': '\'string\'',
                'loc': {
                  'start': {
                    'line': 10,
                    'column': 25
                  },
                  'end': {
                    'line': 10,
                    'column': 33
                  }
                }
              },
              'loc': {
                'start': {
                  'line': 10,
                  'column': 5
                },
                'end': {
                  'line': 10,
                  'column': 33
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
                      'name': 'TypeError',
                      'loc': {
                        'start': {
                          'line': 11,
                          'column': 14
                        },
                        'end': {
                          'line': 11,
                          'column': 23
                        }
                      }
                    },
                    'arguments': [
                      {
                        'type': 'Literal',
                        'value': 'Type error: search term parameter must be of type string',
                        'raw': '"Type error: search term parameter must be of type string"',
                        'loc': {
                          'start': {
                            'line': 11,
                            'column': 24
                          },
                          'end': {
                            'line': 11,
                            'column': 82
                          }
                        }
                      }
                    ],
                    'loc': {
                      'start': {
                        'line': 11,
                        'column': 10
                      },
                      'end': {
                        'line': 11,
                        'column': 83
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 11,
                      'column': 4
                    },
                    'end': {
                      'line': 11,
                      'column': 84
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 10,
                  'column': 35
                },
                'end': {
                  'line': 12,
                  'column': 3
                }
              }
            },
            'alternate': null,
            'loc': {
              'start': {
                'line': 10,
                'column': 2
              },
              'end': {
                'line': 12,
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
                      'line': 14,
                      'column': 6
                    },
                    'end': {
                      'line': 14,
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
                          'line': 14,
                          'column': 22
                        },
                        'end': {
                          'line': 14,
                          'column': 28
                        }
                      }
                    },
                    'property': {
                      'type': 'Identifier',
                      'name': 'slice',
                      'loc': {
                        'start': {
                          'line': 14,
                          'column': 29
                        },
                        'end': {
                          'line': 14,
                          'column': 34
                        }
                      }
                    },
                    'loc': {
                      'start': {
                        'line': 14,
                        'column': 22
                      },
                      'end': {
                        'line': 14,
                        'column': 34
                      }
                    }
                  },
                  'arguments': [
                    {
                      'type': 'BinaryExpression',
                      'operator': '-',
                      'left': {
                        'type': 'Identifier',
                        'name': 'endPosition',
                        'loc': {
                          'start': {
                            'line': 14,
                            'column': 36
                          },
                          'end': {
                            'line': 14,
                            'column': 47
                          }
                        }
                      },
                      'right': {
                        'type': 'Identifier',
                        'name': 'searchLength',
                        'loc': {
                          'start': {
                            'line': 14,
                            'column': 50
                          },
                          'end': {
                            'line': 14,
                            'column': 62
                          }
                        }
                      },
                      'loc': {
                        'start': {
                          'line': 14,
                          'column': 36
                        },
                        'end': {
                          'line': 14,
                          'column': 62
                        }
                      }
                    },
                    {
                      'type': 'Identifier',
                      'name': 'endPosition',
                      'loc': {
                        'start': {
                          'line': 14,
                          'column': 65
                        },
                        'end': {
                          'line': 14,
                          'column': 76
                        }
                      }
                    }
                  ],
                  'loc': {
                    'start': {
                      'line': 14,
                      'column': 22
                    },
                    'end': {
                      'line': 14,
                      'column': 77
                    }
                  }
                },
                'loc': {
                  'start': {
                    'line': 14,
                    'column': 6
                  },
                  'end': {
                    'line': 14,
                    'column': 77
                  }
                }
              }
            ],
            'kind': 'var',
            'loc': {
              'start': {
                'line': 14,
                'column': 2
              },
              'end': {
                'line': 14,
                'column': 78
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
                    'line': 15,
                    'column': 5
                  },
                  'end': {
                    'line': 15,
                    'column': 18
                  }
                }
              },
              'right': {
                'type': 'Identifier',
                'name': 'searchStr',
                'loc': {
                  'start': {
                    'line': 15,
                    'column': 22
                  },
                  'end': {
                    'line': 15,
                    'column': 31
                  }
                }
              },
              'loc': {
                'start': {
                  'line': 15,
                  'column': 5
                },
                'end': {
                  'line': 15,
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
                        'line': 16,
                        'column': 11
                      },
                      'end': {
                        'line': 16,
                        'column': 15
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 16,
                      'column': 4
                    },
                    'end': {
                      'line': 16,
                      'column': 16
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 15,
                  'column': 33
                },
                'end': {
                  'line': 17,
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
                        'line': 18,
                        'column': 11
                      },
                      'end': {
                        'line': 18,
                        'column': 16
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 18,
                      'column': 4
                    },
                    'end': {
                      'line': 18,
                      'column': 17
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 17,
                  'column': 9
                },
                'end': {
                  'line': 19,
                  'column': 3
                }
              }
            },
            'loc': {
              'start': {
                'line': 15,
                'column': 2
              },
              'end': {
                'line': 19,
                'column': 3
              }
            }
          }
        ],
        'loc': {
          'start': {
            'line': 5,
            'column': 61
          },
          'end': {
            'line': 20,
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
          'column': 28
        },
        'end': {
          'line': 20,
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
        'line': 20,
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
      'line': 20,
      'column': 1
    }
  }
};
module.exports = { endsWithAST };

