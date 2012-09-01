(function(Mobify) {
var slice = [].slice;

var iter = Mobify.iter = {
    extend: function(target){
        slice.call(arguments, 1).forEach(function(source) {
            for (key in source)
                if (source[key] !== undefined)
                    target[key] = source[key];
        });
        return target;
    }

  , keys: function(obj) {
        var result = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                result.push(key);
        }
        return result;
    }

  , values: function(obj) {
        var result = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                result.push(obj[key]);
        }
        return result;
    }
};

})(Mobify);