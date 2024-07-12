export const PostsByPublicationDocument = {
    kind: 'Document',
    definitions: [
      {
        kind: 'OperationDefinition',
        operation: 'query',
        name: { kind: 'Name', value: 'PostsByPublication' },
        variableDefinitions: [
          {
            kind: 'VariableDefinition',
            variable: { kind: 'Variable', name: { kind: 'Name', value: 'host' } },
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
            }
          },
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: { kind: 'Name', value: 'first' }
            },
            type: {
              kind: 'NonNullType',
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
            }
          },
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: { kind: 'Name', value: 'after' }
            },
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
          }
        ],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'publication' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'host' },
                  value: {
                    kind: 'Variable',
                    name: { kind: 'Name', value: 'host' }
                  }
                }
              ],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'FragmentSpread',
                    name: { kind: 'Name', value: 'Publication' }
                  },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'posts' },
                    arguments: [
                      {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'first' },
                        value: {
                          kind: 'Variable',
                          name: { kind: 'Name', value: 'first' }
                        }
                      },
                      {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'after' },
                        value: {
                          kind: 'Variable',
                          name: { kind: 'Name', value: 'after' }
                        }
                      }
                    ],
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [
                        {
                          kind: 'Field',
                          name: { kind: 'Name', value: 'totalDocuments' }
                        },
                        {
                          kind: 'Field',
                          name: { kind: 'Name', value: 'edges' },
                          selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                              {
                                kind: 'Field',
                                name: { kind: 'Name', value: 'node' },
                                selectionSet: {
                                  kind: 'SelectionSet',
                                  selections: [
                                    {
                                      kind: 'FragmentSpread',
                                      name: { kind: 'Name', value: 'Post' }
                                    },
                                    {
                                      kind: 'Field',
                                      name: { kind: 'Name', value: 'comments' },
                                      arguments: [
                                        {
                                          kind: 'Argument',
                                          name: { kind: 'Name', value: 'first' },
                                          value: { kind: 'IntValue', value: '0' }
                                        }
                                      ],
                                      selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                          {
                                            kind: 'Field',
                                            name: {
                                              kind: 'Name',
                                              value: 'totalDocuments'
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          kind: 'Field',
                          name: { kind: 'Name', value: 'pageInfo' },
                          selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                              {
                                kind: 'FragmentSpread',
                                name: { kind: 'Name', value: 'PageInfo' }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        kind: 'FragmentDefinition',
        name: { kind: 'Name', value: 'Publication' },
        typeCondition: {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Publication' }
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
            { kind: 'Field', name: { kind: 'Name', value: 'displayTitle' } },
            { kind: 'Field', name: { kind: 'Name', value: 'url' } },
            { kind: 'Field', name: { kind: 'Name', value: 'metaTags' } },
            { kind: 'Field', name: { kind: 'Name', value: 'favicon' } },
            { kind: 'Field', name: { kind: 'Name', value: 'isTeam' } },
            { kind: 'Field', name: { kind: 'Name', value: 'followersCount' } },
            { kind: 'Field', name: { kind: 'Name', value: 'descriptionSEO' } },
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'author' },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                  { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'profilePicture' }
                  },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'followersCount' }
                  }
                ]
              }
            },
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'ogMetaData' },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  { kind: 'Field', name: { kind: 'Name', value: 'image' } }
                ]
              }
            },
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'preferences' },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  { kind: 'Field', name: { kind: 'Name', value: 'logo' } },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'darkMode' },
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'logo' } }
                      ]
                    }
                  },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'navbarItems' },
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'url' } }
                      ]
                    }
                  }
                ]
              }
            },
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'links' },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  { kind: 'Field', name: { kind: 'Name', value: 'twitter' } },
                  { kind: 'Field', name: { kind: 'Name', value: 'github' } },
                  { kind: 'Field', name: { kind: 'Name', value: 'linkedin' } },
                  { kind: 'Field', name: { kind: 'Name', value: 'hashnode' } }
                ]
              }
            },
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'integrations' },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'umamiWebsiteUUID' }
                  },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'gaTrackingID' }
                  },
                  { kind: 'Field', name: { kind: 'Name', value: 'fbPixelID' } },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'hotjarSiteID' }
                  },
                  { kind: 'Field', name: { kind: 'Name', value: 'matomoURL' } },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'matomoSiteID' }
                  },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'fathomSiteID' }
                  },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'fathomCustomDomain' }
                  },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'fathomCustomDomainEnabled' }
                  },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'plausibleAnalyticsEnabled' }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        kind: 'FragmentDefinition',
        name: { kind: 'Name', value: 'Post' },
        typeCondition: {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Post' }
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
            { kind: 'Field', name: { kind: 'Name', value: 'url' } },
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'author' },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'profilePicture' }
                  }
                ]
              }
            },
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'coverImage' },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  { kind: 'Field', name: { kind: 'Name', value: 'url' } }
                ]
              }
            },
            { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
            { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
            { kind: 'Field', name: { kind: 'Name', value: 'brief' } },
            {
              kind: 'Field',
              name: { kind: 'Name', value: 'comments' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'first' },
                  value: { kind: 'IntValue', value: '0' }
                }
              ],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: { kind: 'Name', value: 'totalDocuments' }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        kind: 'FragmentDefinition',
        name: { kind: 'Name', value: 'PageInfo' },
        typeCondition: {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'PageInfo' }
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
            { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } }
          ]
        }
      }
    ]
  }

  import React from 'react'
  
  const schema = () => {
    return (
      <div>
        dummy
      </div>
    )
  }
  
  export default schema
  