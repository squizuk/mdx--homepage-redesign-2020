(function () {
    var mainSearchHeading = globals.mainSearchHeading,
        mainSearchUrl = globals.mainSearchUrl,
        suggestionUrl = globals.suggestionUrl;

    var mainSearch = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            // url: 'https://mdx.funnelback.co.uk/s/suggest.json?collection=mdx-courses&show=3&fmt=json++&partial_query=%QUERY',
            url: mainSearchUrl,
            wildcard: '%QUERY',
            filter: function filter(engine) {
                return $.map(engine, function (item) { // eslint-disable-line
                    if (item.disp) {
                        return {
                            url: item.disp.url,
                            value: item.disp.title
                        };
                    }
                });
            },
            prefetch: {
                cache: false
            }
        }
    });

    var suggestion = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            // url: 'https://mdx.funnelback.co.uk/s/suggest.json?collection=mdx-meta&show=5&partial_query=%QUERY',
            url: suggestionUrl,
            wildcard: '%QUERY',
            filter: function filter(engine) {
                var results = $.map(engine, function (item) { // eslint-disable-line
                    return {
                        value: item
                    };
                });

                results = results.filter(function (item, index, self) {
                    return index === self.findIndex(function (t) {
                        return t.value === item.value;
                    });
                });

                return results;
            },
            prefetch: {
                cache: false
            }
        }
    });

    mainSearch.clear();
    suggestion.clear();

    $('#multiple-datasets .typeahead').typeahead({
        highlight: true,
        minLength: 3,
    }, {
        name: 'suggestion',
        display: 'value',
        limit: 7,
        source: suggestion,
        templates: {
            suggestion: function suggestion(el) {
                return `<div class="search__suggestion-component">${el.value}</div>`;
            },
            empty: '<p>Sorry, no results for this query</p>'
        }
    }, {
        name: 'main',
        display: 'value',
        limit: 7,
        source: mainSearch,
        templates: {
            header: '<h3 class="search__suggestion-header">' + mainSearchHeading + '</h3>',
            suggestion: function suggestion(el) {
                return `<a class="search__suggestion-component" href="${el.url}"><p class="search__suggestion-text">${el.value}</p></a>`;
            },
        }
    });

    $('#multiple-datasets .typeahead').on('typeahead:selected', function (e, datum) {
        e.preventDefault();

        if (datum && datum.url) {
            window.location.href = datum.url
        }
    });

    $('.hero-banner__search-input .typeahead').typeahead({
        highlight: true,
        minLength: 3,
    }, {
        name: 'suggestion',
        display: 'value',
        limit: 7,
        source: suggestion,
        templates: {
            suggestion: function suggestion(el) {
                return `<div class="search__suggestion-component">${el.value}</div>`;
            },
            empty: '<p>Sorry, no results for this query</p>'
        }
    });
})();
