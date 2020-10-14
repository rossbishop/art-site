#!/bin/sh
aws cognito-idp add-custom-attributes \
--user-pool-id eu-west-2_ajTX2hSlK \
--custom-attributes \
'[
  {
    "Name": "job",
    "AttributeDataType": "String",
    "DeveloperOnlyAttribute": false,
    "Mutable": true,
    "Required": false,
    "StringAttributeConstraints": {
      "MinLength": "1",
      "MaxLength": "256"
    }
  }
]'