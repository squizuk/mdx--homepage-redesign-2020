var mdxGlobal = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: [
      "business",
      "building",
      "but",
      "bus",
      "build"
    ]
  });

  $('#multiple-datasets .typeahead').typeahead({
    highlight: true
  },
    {
      name: 'mdxGlobal',
      source: mdxGlobal,
    },
  );