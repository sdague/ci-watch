function find_latest_pass_fail (data) {
    console.log("Entering function");
    var results = [];
    // this loops over a set of series
    for (var i = 0; i < data.length; i++) {
        // this loops over the data in x
        var target = data[i]['target'].split('.');
        var result = target.pop();
        var job = target.pop();
        var innerdata = data[i]['datapoints'];
        for (var j = 0; j < innerdata.length; j++) {
            if (innerdata[j][0] > 0) {
                console.log(innerdata[j]);
                var date = innerdata[j][1];
                results.push([date, result]);
            }
        }
    }
    results = results.sort(function(a, b){ return d3.ascending(a[0], b[0]); });
    console.log(results);
    return results;
}
