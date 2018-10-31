import (/* webpackChunkName:'subpageA */ './subPageA')
     .then(function (subPageA) {
         console.log(subPageA)
     })

import (/*webpackChunkName:'subPageB'*/ './subpageB')
        .then(function (subpageB) {
            console.log(subpageB)
        })