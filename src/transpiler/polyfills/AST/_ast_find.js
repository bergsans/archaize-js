const findAST = {
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
          'name': 'Array',
          'loc': {
            'start': {
              'line': 5,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 5
            }
          }
        },
        'property': {
          'type': 'Identifier',
          'name': 'prototype',
          'loc': {
            'start': {
              'line': 5,
              'column': 6
            },
            'end': {
              'line': 5,
              'column': 15
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
            'column': 15
          }
        }
      },
      'property': {
        'type': 'Identifier',
        'name': 'find',
        'loc': {
          'start': {
            'line': 5,
            'column': 16
          },
          'end': {
            'line': 5,
            'column': 20
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
          'column': 20
        }
      }
    },
    'right': {
      'type': 'FunctionExpression',
      'id': null,
      'params': [
        {
          'type': 'Identifier',
          'name': 'f',
          'loc': {
            'start': {
              'line': 5,
              'column': 32
            },
            'end': {
              'line': 5,
              'column': 33
            }
          }
        },
        {
          'type': 'Identifier',
          'name': 'thisArg',
          'loc': {
            'start': {
              'line': 5,
              'column': 35
            },
            'end': {
              'line': 5,
              'column': 42
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
                  'name': 'arr',
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 6
                    },
                    'end': {
                      'line': 6,
                      'column': 9
                    }
                  }
                },
                'init': {
                  'type': 'ThisExpression',
                  'loc': {
                    'start': {
                      'line': 6,
                      'column': 12
                    },
                    'end': {
                      'line': 6,
                      'column': 16
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
                    'column': 16
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
                'column': 17
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
                  'name': 'f',
                  'loc': {
                    'start': {
                      'line': 8,
                      'column': 12
                    },
                    'end': {
                      'line': 8,
                      'column': 13
                    }
                  }
                },
                'prefix': true,
                'loc': {
                  'start': {
                    'line': 8,
                    'column': 5
                  },
                  'end': {
                    'line': 8,
                    'column': 13
                  }
                }
              },
              'right': {
                'type': 'Literal',
                'value': 'function',
                'raw': '\'function\'',
                'loc': {
                  'start': {
                    'line': 8,
                    'column': 17
                  },
                  'end': {
                    'line': 8,
                    'column': 27
                  }
                }
              },
              'loc': {
                'start': {
                  'line': 8,
                  'column': 5
                },
                'end': {
                  'line': 8,
                  'column': 27
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
                          'line': 9,
                          'column': 14
                        },
                        'end': {
                          'line': 9,
                          'column': 23
                        }
                      }
                    },
                    'arguments': [
                      {
                        'type': 'Literal',
                        'value': 'Not a function',
                        'raw': '\'Not a function\'',
                        'loc': {
                          'start': {
                            'line': 9,
                            'column': 24
                          },
                          'end': {
                            'line': 9,
                            'column': 40
                          }
                        }
                      }
                    ],
                    'loc': {
                      'start': {
                        'line': 9,
                        'column': 10
                      },
                      'end': {
                        'line': 9,
                        'column': 41
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 9,
                      'column': 4
                    },
                    'end': {
                      'line': 9,
                      'column': 42
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 8,
                  'column': 29
                },
                'end': {
                  'line': 10,
                  'column': 3
                }
              }
            },
            'alternate': null,
            'loc': {
              'start': {
                'line': 8,
                'column': 2
              },
              'end': {
                'line': 10,
                'column': 3
              }
            }
          },
          {
            'type': 'IfStatement',
            'test': {
              'type': 'Identifier',
              'name': 'thisArg',
              'loc': {
                'start': {
                  'line': 12,
                  'column': 5
                },
                'end': {
                  'line': 12,
                  'column': 12
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
                      'name': 'arr',
                      'loc': {
                        'start': {
                          'line': 13,
                          'column': 4
                        },
                        'end': {
                          'line': 13,
                          'column': 7
                        }
                      }
                    },
                    'right': {
                      'type': 'Identifier',
                      'name': 'thisArg',
                      'loc': {
                        'start': {
                          'line': 13,
                          'column': 10
                        },
                        'end': {
                          'line': 13,
                          'column': 17
                        }
                      }
                    },
                    'loc': {
                      'start': {
                        'line': 13,
                        'column': 4
                      },
                      'end': {
                        'line': 13,
                        'column': 17
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 13,
                      'column': 4
                    },
                    'end': {
                      'line': 13,
                      'column': 18
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 12,
                  'column': 14
                },
                'end': {
                  'line': 14,
                  'column': 3
                }
              }
            },
            'alternate': null,
            'loc': {
              'start': {
                'line': 12,
                'column': 2
              },
              'end': {
                'line': 14,
                'column': 3
              }
            }
          },
          {
            'type': 'ForStatement',
            'init': {
              'type': 'VariableDeclaration',
              'declarations': [
                {
                  'type': 'VariableDeclarator',
                  'id': {
                    'type': 'Identifier',
                    'name': 'i',
                    'loc': {
                      'start': {
                        'line': 16,
                        'column': 10
                      },
                      'end': {
                        'line': 16,
                        'column': 11
                      }
                    }
                  },
                  'init': {
                    'type': 'Literal',
                    'value': 0,
                    'raw': '0',
                    'loc': {
                      'start': {
                        'line': 16,
                        'column': 14
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
                      'column': 10
                    },
                    'end': {
                      'line': 16,
                      'column': 15
                    }
                  }
                }
              ],
              'kind': 'var',
              'loc': {
                'start': {
                  'line': 16,
                  'column': 6
                },
                'end': {
                  'line': 16,
                  'column': 15
                }
              }
            },
            'test': {
              'type': 'BinaryExpression',
              'operator': '<',
              'left': {
                'type': 'Identifier',
                'name': 'i',
                'loc': {
                  'start': {
                    'line': 16,
                    'column': 17
                  },
                  'end': {
                    'line': 16,
                    'column': 18
                  }
                }
              },
              'right': {
                'type': 'MemberExpression',
                'computed': false,
                'object': {
                  'type': 'Identifier',
                  'name': 'arr',
                  'loc': {
                    'start': {
                      'line': 16,
                      'column': 21
                    },
                    'end': {
                      'line': 16,
                      'column': 24
                    }
                  }
                },
                'property': {
                  'type': 'Identifier',
                  'name': 'length',
                  'loc': {
                    'start': {
                      'line': 16,
                      'column': 25
                    },
                    'end': {
                      'line': 16,
                      'column': 31
                    }
                  }
                },
                'loc': {
                  'start': {
                    'line': 16,
                    'column': 21
                  },
                  'end': {
                    'line': 16,
                    'column': 31
                  }
                }
              },
              'loc': {
                'start': {
                  'line': 16,
                  'column': 17
                },
                'end': {
                  'line': 16,
                  'column': 31
                }
              }
            },
            'update': {
              'type': 'UpdateExpression',
              'operator': '++',
              'argument': {
                'type': 'Identifier',
                'name': 'i',
                'loc': {
                  'start': {
                    'line': 16,
                    'column': 33
                  },
                  'end': {
                    'line': 16,
                    'column': 34
                  }
                }
              },
              'prefix': false,
              'loc': {
                'start': {
                  'line': 16,
                  'column': 33
                },
                'end': {
                  'line': 16,
                  'column': 36
                }
              }
            },
            'body': {
              'type': 'BlockStatement',
              'body': [
                {
                  'type': 'IfStatement',
                  'test': {
                    'type': 'CallExpression',
                    'callee': {
                      'type': 'Identifier',
                      'name': 'f',
                      'loc': {
                        'start': {
                          'line': 17,
                          'column': 7
                        },
                        'end': {
                          'line': 17,
                          'column': 8
                        }
                      }
                    },
                    'arguments': [
                      {
                        'type': 'MemberExpression',
                        'computed': true,
                        'object': {
                          'type': 'Identifier',
                          'name': 'arr',
                          'loc': {
                            'start': {
                              'line': 17,
                              'column': 9
                            },
                            'end': {
                              'line': 17,
                              'column': 12
                            }
                          }
                        },
                        'property': {
                          'type': 'Identifier',
                          'name': 'i',
                          'loc': {
                            'start': {
                              'line': 17,
                              'column': 13
                            },
                            'end': {
                              'line': 17,
                              'column': 14
                            }
                          }
                        },
                        'loc': {
                          'start': {
                            'line': 17,
                            'column': 9
                          },
                          'end': {
                            'line': 17,
                            'column': 15
                          }
                        }
                      }
                    ],
                    'loc': {
                      'start': {
                        'line': 17,
                        'column': 7
                      },
                      'end': {
                        'line': 17,
                        'column': 16
                      }
                    }
                  },
                  'consequent': {
                    'type': 'BlockStatement',
                    'body': [
                      {
                        'type': 'ReturnStatement',
                        'argument': {
                          'type': 'MemberExpression',
                          'computed': true,
                          'object': {
                            'type': 'Identifier',
                            'name': 'arr',
                            'loc': {
                              'start': {
                                'line': 18,
                                'column': 13
                              },
                              'end': {
                                'line': 18,
                                'column': 16
                              }
                            }
                          },
                          'property': {
                            'type': 'Identifier',
                            'name': 'i',
                            'loc': {
                              'start': {
                                'line': 18,
                                'column': 17
                              },
                              'end': {
                                'line': 18,
                                'column': 18
                              }
                            }
                          },
                          'loc': {
                            'start': {
                              'line': 18,
                              'column': 13
                            },
                            'end': {
                              'line': 18,
                              'column': 19
                            }
                          }
                        },
                        'loc': {
                          'start': {
                            'line': 18,
                            'column': 6
                          },
                          'end': {
                            'line': 18,
                            'column': 20
                          }
                        }
                      }
                    ],
                    'loc': {
                      'start': {
                        'line': 17,
                        'column': 18
                      },
                      'end': {
                        'line': 19,
                        'column': 5
                      }
                    }
                  },
                  'alternate': null,
                  'loc': {
                    'start': {
                      'line': 17,
                      'column': 4
                    },
                    'end': {
                      'line': 19,
                      'column': 5
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 16,
                  'column': 38
                },
                'end': {
                  'line': 20,
                  'column': 3
                }
              }
            },
            'loc': {
              'start': {
                'line': 16,
                'column': 2
              },
              'end': {
                'line': 20,
                'column': 3
              }
            }
          },
          {
            'type': 'ReturnStatement',
            'argument': {
              'type': 'Identifier',
              'name': 'undefined',
              'loc': {
                'start': {
                  'line': 21,
                  'column': 9
                },
                'end': {
                  'line': 21,
                  'column': 18
                }
              }
            },
            'loc': {
              'start': {
                'line': 21,
                'column': 2
              },
              'end': {
                'line': 21,
                'column': 19
              }
            }
          }
        ],
        'loc': {
          'start': {
            'line': 5,
            'column': 44
          },
          'end': {
            'line': 22,
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
          'column': 23
        },
        'end': {
          'line': 22,
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
        'line': 22,
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
      'line': 22,
      'column': 1
    }
  }
};
module.exports = { findAST };

