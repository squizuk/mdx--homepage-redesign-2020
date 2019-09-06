var searchWrapper = document.querySelector('.search-screen');
$(document).ready(function() {
    $(searchWrapper).css('height', $(document).height() + 'px');
});

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

var mdxSuggestion = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: [
        "Business Information Systems Management with Integrated Placement (15 months/24 months) MSc",
        "Building Information Modelling Management and Integrated Digital Delivery MSc/PGDip/PGCert",
        "Building Information Modelling Management and Integrated Digital Delivery MSioiiop",
        "Building Information Modelling Management and Integrated Digital Delityutyutyu",
        "Building Information Modelling Management and Integrated Digital Delivery MSc/tyutyutyu",
        
    ]
});

$('#multiple-datasets .typeahead').typeahead({
    highlight: true
},
    {
        name: 'mdxGlobal',
        source: mdxGlobal,
    },
    {
        name: 'mdxSuggestion',
        source: mdxSuggestion,
        templates: {
            header: '<h3 class="search__suggestion-header">Courses</h3>',
            suggestion: function (data) {
                return '<div class="search__suggestion-component">' + '<p class="search__suggestion-text">' + data + '</p>' + '</div>'
            }
        }
    }
);