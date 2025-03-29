/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 228.0, "minX": 0.0, "maxY": 859.0, "series": [{"data": [[0.0, 228.0], [0.1, 228.0], [0.2, 228.0], [0.3, 229.0], [0.4, 229.0], [0.5, 229.0], [0.6, 229.0], [0.7, 229.0], [0.8, 231.0], [0.9, 231.0], [1.0, 231.0], [1.1, 231.0], [1.2, 231.0], [1.3, 231.0], [1.4, 231.0], [1.5, 231.0], [1.6, 233.0], [1.7, 233.0], [1.8, 233.0], [1.9, 233.0], [2.0, 233.0], [2.1, 233.0], [2.2, 233.0], [2.3, 233.0], [2.4, 235.0], [2.5, 235.0], [2.6, 235.0], [2.7, 235.0], [2.8, 235.0], [2.9, 237.0], [3.0, 237.0], [3.1, 238.0], [3.2, 238.0], [3.3, 238.0], [3.4, 238.0], [3.5, 238.0], [3.6, 238.0], [3.7, 238.0], [3.8, 238.0], [3.9, 239.0], [4.0, 239.0], [4.1, 239.0], [4.2, 240.0], [4.3, 240.0], [4.4, 241.0], [4.5, 241.0], [4.6, 241.0], [4.7, 241.0], [4.8, 241.0], [4.9, 241.0], [5.0, 241.0], [5.1, 241.0], [5.2, 241.0], [5.3, 241.0], [5.4, 243.0], [5.5, 243.0], [5.6, 243.0], [5.7, 243.0], [5.8, 243.0], [5.9, 243.0], [6.0, 244.0], [6.1, 244.0], [6.2, 245.0], [6.3, 245.0], [6.4, 245.0], [6.5, 246.0], [6.6, 246.0], [6.7, 246.0], [6.8, 246.0], [6.9, 246.0], [7.0, 248.0], [7.1, 248.0], [7.2, 248.0], [7.3, 248.0], [7.4, 248.0], [7.5, 248.0], [7.6, 248.0], [7.7, 248.0], [7.8, 248.0], [7.9, 248.0], [8.0, 249.0], [8.1, 249.0], [8.2, 249.0], [8.3, 249.0], [8.4, 249.0], [8.5, 250.0], [8.6, 250.0], [8.7, 250.0], [8.8, 252.0], [8.9, 252.0], [9.0, 252.0], [9.1, 252.0], [9.2, 252.0], [9.3, 253.0], [9.4, 253.0], [9.5, 253.0], [9.6, 253.0], [9.7, 253.0], [9.8, 253.0], [9.9, 253.0], [10.0, 253.0], [10.1, 256.0], [10.2, 256.0], [10.3, 256.0], [10.4, 256.0], [10.5, 256.0], [10.6, 257.0], [10.7, 257.0], [10.8, 257.0], [10.9, 257.0], [11.0, 257.0], [11.1, 257.0], [11.2, 257.0], [11.3, 257.0], [11.4, 258.0], [11.5, 258.0], [11.6, 258.0], [11.7, 258.0], [11.8, 258.0], [11.9, 259.0], [12.0, 259.0], [12.1, 263.0], [12.2, 263.0], [12.3, 263.0], [12.4, 264.0], [12.5, 264.0], [12.6, 264.0], [12.7, 264.0], [12.8, 264.0], [12.9, 266.0], [13.0, 266.0], [13.1, 266.0], [13.2, 267.0], [13.3, 267.0], [13.4, 268.0], [13.5, 268.0], [13.6, 268.0], [13.7, 268.0], [13.8, 268.0], [13.9, 269.0], [14.0, 269.0], [14.1, 269.0], [14.2, 269.0], [14.3, 269.0], [14.4, 269.0], [14.5, 269.0], [14.6, 269.0], [14.7, 269.0], [14.8, 269.0], [14.9, 269.0], [15.0, 269.0], [15.1, 269.0], [15.2, 269.0], [15.3, 269.0], [15.4, 269.0], [15.5, 270.0], [15.6, 270.0], [15.7, 271.0], [15.8, 271.0], [15.9, 271.0], [16.0, 271.0], [16.1, 271.0], [16.2, 271.0], [16.3, 271.0], [16.4, 271.0], [16.5, 271.0], [16.6, 271.0], [16.7, 271.0], [16.8, 272.0], [16.9, 272.0], [17.0, 273.0], [17.1, 273.0], [17.2, 273.0], [17.3, 274.0], [17.4, 274.0], [17.5, 274.0], [17.6, 274.0], [17.7, 274.0], [17.8, 275.0], [17.9, 275.0], [18.0, 276.0], [18.1, 276.0], [18.2, 276.0], [18.3, 276.0], [18.4, 276.0], [18.5, 276.0], [18.6, 276.0], [18.7, 276.0], [18.8, 278.0], [18.9, 278.0], [19.0, 278.0], [19.1, 279.0], [19.2, 279.0], [19.3, 280.0], [19.4, 280.0], [19.5, 280.0], [19.6, 282.0], [19.7, 282.0], [19.8, 282.0], [19.9, 282.0], [20.0, 282.0], [20.1, 283.0], [20.2, 283.0], [20.3, 283.0], [20.4, 284.0], [20.5, 284.0], [20.6, 284.0], [20.7, 284.0], [20.8, 284.0], [20.9, 285.0], [21.0, 285.0], [21.1, 286.0], [21.2, 286.0], [21.3, 286.0], [21.4, 287.0], [21.5, 287.0], [21.6, 287.0], [21.7, 287.0], [21.8, 287.0], [21.9, 287.0], [22.0, 287.0], [22.1, 287.0], [22.2, 289.0], [22.3, 289.0], [22.4, 289.0], [22.5, 289.0], [22.6, 289.0], [22.7, 290.0], [22.8, 290.0], [22.9, 293.0], [23.0, 293.0], [23.1, 293.0], [23.2, 294.0], [23.3, 294.0], [23.4, 295.0], [23.5, 295.0], [23.6, 295.0], [23.7, 297.0], [23.8, 297.0], [23.9, 297.0], [24.0, 298.0], [24.1, 298.0], [24.2, 298.0], [24.3, 298.0], [24.4, 298.0], [24.5, 299.0], [24.6, 299.0], [24.7, 299.0], [24.8, 299.0], [24.9, 299.0], [25.0, 299.0], [25.1, 299.0], [25.2, 299.0], [25.3, 299.0], [25.4, 299.0], [25.5, 300.0], [25.6, 300.0], [25.7, 300.0], [25.8, 300.0], [25.9, 300.0], [26.0, 300.0], [26.1, 300.0], [26.2, 300.0], [26.3, 300.0], [26.4, 300.0], [26.5, 302.0], [26.6, 302.0], [26.7, 302.0], [26.8, 302.0], [26.9, 302.0], [27.0, 302.0], [27.1, 302.0], [27.2, 302.0], [27.3, 303.0], [27.4, 303.0], [27.5, 303.0], [27.6, 303.0], [27.7, 303.0], [27.8, 304.0], [27.9, 304.0], [28.0, 304.0], [28.1, 304.0], [28.2, 304.0], [28.3, 305.0], [28.4, 305.0], [28.5, 305.0], [28.6, 305.0], [28.7, 305.0], [28.8, 307.0], [28.9, 307.0], [29.0, 307.0], [29.1, 307.0], [29.2, 307.0], [29.3, 307.0], [29.4, 308.0], [29.5, 308.0], [29.6, 309.0], [29.7, 309.0], [29.8, 309.0], [29.9, 311.0], [30.0, 311.0], [30.1, 313.0], [30.2, 313.0], [30.3, 313.0], [30.4, 313.0], [30.5, 313.0], [30.6, 314.0], [30.7, 314.0], [30.8, 314.0], [30.9, 314.0], [31.0, 314.0], [31.1, 314.0], [31.2, 316.0], [31.3, 316.0], [31.4, 318.0], [31.5, 318.0], [31.6, 318.0], [31.7, 318.0], [31.8, 318.0], [31.9, 319.0], [32.0, 319.0], [32.1, 319.0], [32.2, 320.0], [32.3, 320.0], [32.4, 321.0], [32.5, 321.0], [32.6, 321.0], [32.7, 321.0], [32.8, 321.0], [32.9, 321.0], [33.0, 322.0], [33.1, 322.0], [33.2, 324.0], [33.3, 324.0], [33.4, 324.0], [33.5, 326.0], [33.6, 326.0], [33.7, 326.0], [33.8, 326.0], [33.9, 326.0], [34.0, 327.0], [34.1, 327.0], [34.2, 328.0], [34.3, 328.0], [34.4, 328.0], [34.5, 328.0], [34.6, 328.0], [34.7, 328.0], [34.8, 329.0], [34.9, 329.0], [35.0, 331.0], [35.1, 331.0], [35.2, 331.0], [35.3, 331.0], [35.4, 331.0], [35.5, 331.0], [35.6, 331.0], [35.7, 331.0], [35.8, 332.0], [35.9, 332.0], [36.0, 332.0], [36.1, 332.0], [36.2, 332.0], [36.3, 335.0], [36.4, 335.0], [36.5, 335.0], [36.6, 337.0], [36.7, 337.0], [36.8, 338.0], [36.9, 338.0], [37.0, 338.0], [37.1, 338.0], [37.2, 338.0], [37.3, 339.0], [37.4, 339.0], [37.5, 339.0], [37.6, 341.0], [37.7, 341.0], [37.8, 341.0], [37.9, 341.0], [38.0, 341.0], [38.1, 343.0], [38.2, 343.0], [38.3, 343.0], [38.4, 343.0], [38.5, 343.0], [38.6, 344.0], [38.7, 344.0], [38.8, 344.0], [38.9, 344.0], [39.0, 344.0], [39.1, 345.0], [39.2, 345.0], [39.3, 345.0], [39.4, 345.0], [39.5, 345.0], [39.6, 346.0], [39.7, 346.0], [39.8, 346.0], [39.9, 346.0], [40.0, 346.0], [40.1, 346.0], [40.2, 347.0], [40.3, 347.0], [40.4, 347.0], [40.5, 347.0], [40.6, 347.0], [40.7, 349.0], [40.8, 349.0], [40.9, 349.0], [41.0, 349.0], [41.1, 349.0], [41.2, 355.0], [41.3, 355.0], [41.4, 355.0], [41.5, 355.0], [41.6, 355.0], [41.7, 356.0], [41.8, 356.0], [41.9, 356.0], [42.0, 356.0], [42.1, 356.0], [42.2, 356.0], [42.3, 356.0], [42.4, 356.0], [42.5, 358.0], [42.6, 358.0], [42.7, 359.0], [42.8, 359.0], [42.9, 359.0], [43.0, 360.0], [43.1, 360.0], [43.2, 361.0], [43.3, 361.0], [43.4, 361.0], [43.5, 362.0], [43.6, 362.0], [43.7, 362.0], [43.8, 363.0], [43.9, 363.0], [44.0, 363.0], [44.1, 363.0], [44.2, 363.0], [44.3, 363.0], [44.4, 363.0], [44.5, 364.0], [44.6, 364.0], [44.7, 364.0], [44.8, 364.0], [44.9, 364.0], [45.0, 365.0], [45.1, 365.0], [45.2, 365.0], [45.3, 367.0], [45.4, 367.0], [45.5, 367.0], [45.6, 367.0], [45.7, 367.0], [45.8, 367.0], [45.9, 367.0], [46.0, 367.0], [46.1, 367.0], [46.2, 367.0], [46.3, 368.0], [46.4, 368.0], [46.5, 368.0], [46.6, 368.0], [46.7, 368.0], [46.8, 369.0], [46.9, 369.0], [47.0, 369.0], [47.1, 370.0], [47.2, 370.0], [47.3, 370.0], [47.4, 371.0], [47.5, 371.0], [47.6, 374.0], [47.7, 374.0], [47.8, 374.0], [47.9, 376.0], [48.0, 376.0], [48.1, 376.0], [48.2, 376.0], [48.3, 376.0], [48.4, 377.0], [48.5, 377.0], [48.6, 377.0], [48.7, 377.0], [48.8, 377.0], [48.9, 377.0], [49.0, 377.0], [49.1, 377.0], [49.2, 377.0], [49.3, 377.0], [49.4, 379.0], [49.5, 379.0], [49.6, 379.0], [49.7, 379.0], [49.8, 379.0], [49.9, 380.0], [50.0, 380.0], [50.1, 380.0], [50.2, 380.0], [50.3, 380.0], [50.4, 383.0], [50.5, 383.0], [50.6, 383.0], [50.7, 383.0], [50.8, 383.0], [50.9, 384.0], [51.0, 384.0], [51.1, 384.0], [51.2, 386.0], [51.3, 386.0], [51.4, 386.0], [51.5, 386.0], [51.6, 386.0], [51.7, 387.0], [51.8, 387.0], [51.9, 387.0], [52.0, 388.0], [52.1, 388.0], [52.2, 388.0], [52.3, 388.0], [52.4, 388.0], [52.5, 388.0], [52.6, 388.0], [52.7, 389.0], [52.8, 389.0], [52.9, 389.0], [53.0, 389.0], [53.1, 389.0], [53.2, 389.0], [53.3, 390.0], [53.4, 390.0], [53.5, 390.0], [53.6, 390.0], [53.7, 390.0], [53.8, 392.0], [53.9, 392.0], [54.0, 393.0], [54.1, 393.0], [54.2, 393.0], [54.3, 393.0], [54.4, 393.0], [54.5, 396.0], [54.6, 396.0], [54.7, 396.0], [54.8, 397.0], [54.9, 397.0], [55.0, 397.0], [55.1, 398.0], [55.2, 398.0], [55.3, 399.0], [55.4, 399.0], [55.5, 399.0], [55.6, 399.0], [55.7, 399.0], [55.8, 400.0], [55.9, 400.0], [56.0, 400.0], [56.1, 400.0], [56.2, 400.0], [56.3, 401.0], [56.4, 401.0], [56.5, 401.0], [56.6, 401.0], [56.7, 401.0], [56.8, 401.0], [56.9, 403.0], [57.0, 403.0], [57.1, 403.0], [57.2, 403.0], [57.3, 403.0], [57.4, 403.0], [57.5, 403.0], [57.6, 407.0], [57.7, 407.0], [57.8, 407.0], [57.9, 408.0], [58.0, 408.0], [58.1, 409.0], [58.2, 409.0], [58.3, 409.0], [58.4, 410.0], [58.5, 410.0], [58.6, 410.0], [58.7, 411.0], [58.8, 411.0], [58.9, 412.0], [59.0, 412.0], [59.1, 412.0], [59.2, 412.0], [59.3, 412.0], [59.4, 412.0], [59.5, 412.0], [59.6, 412.0], [59.7, 416.0], [59.8, 416.0], [59.9, 416.0], [60.0, 416.0], [60.1, 416.0], [60.2, 416.0], [60.3, 416.0], [60.4, 416.0], [60.5, 417.0], [60.6, 417.0], [60.7, 418.0], [60.8, 418.0], [60.9, 418.0], [61.0, 418.0], [61.1, 418.0], [61.2, 419.0], [61.3, 419.0], [61.4, 419.0], [61.5, 420.0], [61.6, 420.0], [61.7, 422.0], [61.8, 422.0], [61.9, 422.0], [62.0, 424.0], [62.1, 424.0], [62.2, 424.0], [62.3, 425.0], [62.4, 425.0], [62.5, 425.0], [62.6, 425.0], [62.7, 425.0], [62.8, 426.0], [62.9, 426.0], [63.0, 426.0], [63.1, 426.0], [63.2, 426.0], [63.3, 427.0], [63.4, 427.0], [63.5, 427.0], [63.6, 427.0], [63.7, 427.0], [63.8, 428.0], [63.9, 428.0], [64.0, 428.0], [64.1, 431.0], [64.2, 431.0], [64.3, 433.0], [64.4, 433.0], [64.5, 433.0], [64.6, 434.0], [64.7, 434.0], [64.8, 434.0], [64.9, 434.0], [65.0, 434.0], [65.1, 435.0], [65.2, 435.0], [65.3, 436.0], [65.4, 436.0], [65.5, 436.0], [65.6, 436.0], [65.7, 436.0], [65.8, 436.0], [65.9, 436.0], [66.0, 436.0], [66.1, 437.0], [66.2, 437.0], [66.3, 437.0], [66.4, 437.0], [66.5, 437.0], [66.6, 437.0], [66.7, 437.0], [66.8, 437.0], [66.9, 439.0], [67.0, 439.0], [67.1, 439.0], [67.2, 439.0], [67.3, 439.0], [67.4, 440.0], [67.5, 440.0], [67.6, 440.0], [67.7, 440.0], [67.8, 440.0], [67.9, 441.0], [68.0, 441.0], [68.1, 441.0], [68.2, 442.0], [68.3, 442.0], [68.4, 442.0], [68.5, 442.0], [68.6, 442.0], [68.7, 443.0], [68.8, 443.0], [68.9, 443.0], [69.0, 443.0], [69.1, 443.0], [69.2, 443.0], [69.3, 443.0], [69.4, 443.0], [69.5, 444.0], [69.6, 444.0], [69.7, 444.0], [69.8, 444.0], [69.9, 444.0], [70.0, 445.0], [70.1, 445.0], [70.2, 447.0], [70.3, 447.0], [70.4, 447.0], [70.5, 447.0], [70.6, 447.0], [70.7, 447.0], [70.8, 447.0], [70.9, 447.0], [71.0, 447.0], [71.1, 447.0], [71.2, 447.0], [71.3, 449.0], [71.4, 449.0], [71.5, 450.0], [71.6, 450.0], [71.7, 450.0], [71.8, 451.0], [71.9, 451.0], [72.0, 451.0], [72.1, 451.0], [72.2, 451.0], [72.3, 453.0], [72.4, 453.0], [72.5, 455.0], [72.6, 455.0], [72.7, 455.0], [72.8, 457.0], [72.9, 457.0], [73.0, 457.0], [73.1, 457.0], [73.2, 457.0], [73.3, 458.0], [73.4, 458.0], [73.5, 458.0], [73.6, 458.0], [73.7, 458.0], [73.8, 459.0], [73.9, 459.0], [74.0, 459.0], [74.1, 459.0], [74.2, 459.0], [74.3, 459.0], [74.4, 459.0], [74.5, 459.0], [74.6, 459.0], [74.7, 459.0], [74.8, 459.0], [74.9, 460.0], [75.0, 460.0], [75.1, 460.0], [75.2, 460.0], [75.3, 460.0], [75.4, 461.0], [75.5, 461.0], [75.6, 461.0], [75.7, 461.0], [75.8, 461.0], [75.9, 462.0], [76.0, 462.0], [76.1, 462.0], [76.2, 462.0], [76.3, 462.0], [76.4, 463.0], [76.5, 463.0], [76.6, 463.0], [76.7, 464.0], [76.8, 464.0], [76.9, 464.0], [77.0, 464.0], [77.1, 464.0], [77.2, 465.0], [77.3, 465.0], [77.4, 466.0], [77.5, 466.0], [77.6, 466.0], [77.7, 467.0], [77.8, 467.0], [77.9, 468.0], [78.0, 468.0], [78.1, 468.0], [78.2, 469.0], [78.3, 469.0], [78.4, 469.0], [78.5, 470.0], [78.6, 470.0], [78.7, 471.0], [78.8, 471.0], [78.9, 471.0], [79.0, 475.0], [79.1, 475.0], [79.2, 475.0], [79.3, 475.0], [79.4, 475.0], [79.5, 475.0], [79.6, 475.0], [79.7, 476.0], [79.8, 476.0], [79.9, 476.0], [80.0, 476.0], [80.1, 476.0], [80.2, 476.0], [80.3, 477.0], [80.4, 477.0], [80.5, 478.0], [80.6, 478.0], [80.7, 478.0], [80.8, 479.0], [80.9, 479.0], [81.0, 480.0], [81.1, 480.0], [81.2, 480.0], [81.3, 480.0], [81.4, 480.0], [81.5, 481.0], [81.6, 481.0], [81.7, 481.0], [81.8, 485.0], [81.9, 485.0], [82.0, 485.0], [82.1, 485.0], [82.2, 485.0], [82.3, 486.0], [82.4, 486.0], [82.5, 486.0], [82.6, 488.0], [82.7, 488.0], [82.8, 489.0], [82.9, 489.0], [83.0, 489.0], [83.1, 490.0], [83.2, 490.0], [83.3, 491.0], [83.4, 491.0], [83.5, 491.0], [83.6, 491.0], [83.7, 491.0], [83.8, 491.0], [83.9, 491.0], [84.0, 491.0], [84.1, 492.0], [84.2, 492.0], [84.3, 492.0], [84.4, 492.0], [84.5, 492.0], [84.6, 493.0], [84.7, 493.0], [84.8, 493.0], [84.9, 494.0], [85.0, 494.0], [85.1, 496.0], [85.2, 496.0], [85.3, 496.0], [85.4, 496.0], [85.5, 496.0], [85.6, 496.0], [85.7, 498.0], [85.8, 498.0], [85.9, 498.0], [86.0, 498.0], [86.1, 498.0], [86.2, 498.0], [86.3, 498.0], [86.4, 498.0], [86.5, 498.0], [86.6, 498.0], [86.7, 498.0], [86.8, 498.0], [86.9, 499.0], [87.0, 499.0], [87.1, 499.0], [87.2, 499.0], [87.3, 499.0], [87.4, 499.0], [87.5, 500.0], [87.6, 500.0], [87.7, 501.0], [87.8, 501.0], [87.9, 501.0], [88.0, 502.0], [88.1, 502.0], [88.2, 502.0], [88.3, 502.0], [88.4, 502.0], [88.5, 502.0], [88.6, 502.0], [88.7, 503.0], [88.8, 503.0], [88.9, 503.0], [89.0, 503.0], [89.1, 503.0], [89.2, 503.0], [89.3, 504.0], [89.4, 504.0], [89.5, 505.0], [89.6, 505.0], [89.7, 505.0], [89.8, 505.0], [89.9, 505.0], [90.0, 506.0], [90.1, 506.0], [90.2, 506.0], [90.3, 506.0], [90.4, 506.0], [90.5, 507.0], [90.6, 507.0], [90.7, 507.0], [90.8, 507.0], [90.9, 507.0], [91.0, 507.0], [91.1, 507.0], [91.2, 507.0], [91.3, 507.0], [91.4, 507.0], [91.5, 507.0], [91.6, 508.0], [91.7, 508.0], [91.8, 509.0], [91.9, 509.0], [92.0, 509.0], [92.1, 510.0], [92.2, 510.0], [92.3, 511.0], [92.4, 511.0], [92.5, 511.0], [92.6, 512.0], [92.7, 512.0], [92.8, 512.0], [92.9, 513.0], [93.0, 513.0], [93.1, 515.0], [93.2, 515.0], [93.3, 515.0], [93.4, 515.0], [93.5, 515.0], [93.6, 515.0], [93.7, 515.0], [93.8, 515.0], [93.9, 516.0], [94.0, 516.0], [94.1, 517.0], [94.2, 517.0], [94.3, 517.0], [94.4, 517.0], [94.5, 517.0], [94.6, 517.0], [94.7, 518.0], [94.8, 518.0], [94.9, 518.0], [95.0, 518.0], [95.1, 518.0], [95.2, 519.0], [95.3, 519.0], [95.4, 519.0], [95.5, 519.0], [95.6, 519.0], [95.7, 520.0], [95.8, 520.0], [95.9, 520.0], [96.0, 520.0], [96.1, 520.0], [96.2, 520.0], [96.3, 520.0], [96.4, 520.0], [96.5, 522.0], [96.6, 522.0], [96.7, 522.0], [96.8, 522.0], [96.9, 522.0], [97.0, 523.0], [97.1, 523.0], [97.2, 523.0], [97.3, 523.0], [97.4, 523.0], [97.5, 524.0], [97.6, 524.0], [97.7, 524.0], [97.8, 524.0], [97.9, 524.0], [98.0, 525.0], [98.1, 525.0], [98.2, 525.0], [98.3, 526.0], [98.4, 526.0], [98.5, 526.0], [98.6, 526.0], [98.7, 526.0], [98.8, 528.0], [98.9, 528.0], [99.0, 529.0], [99.1, 529.0], [99.2, 529.0], [99.3, 580.0], [99.4, 580.0], [99.5, 842.0], [99.6, 842.0], [99.7, 842.0], [99.8, 859.0], [99.9, 859.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 123.0, "series": [{"data": [[300.0, 118.0], [800.0, 2.0], [400.0, 123.0], [200.0, 99.0], [500.0, 47.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 48.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 341.0, "series": [{"data": [[0.0, 341.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 48.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.974789915966387, "minX": 1.74327912E12, "maxY": 5.0, "series": [{"data": [[1.74327912E12, 5.0], [1.74327918E12, 4.974789915966387]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74327918E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 252.0, "minX": 1.0, "maxY": 461.0, "series": [{"data": [[2.0, 252.0], [1.0, 461.0], [5.0, 382.18134715025917], [3.0, 349.0]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[4.976863753213368, 381.9640102827765]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 59.733333333333334, "minX": 1.74327912E12, "maxY": 5218.15, "series": [{"data": [[1.74327912E12, 467.73333333333335], [1.74327918E12, 5218.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74327912E12, 59.733333333333334], [1.74327918E12, 666.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74327918E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 376.5798319327733, "minX": 1.74327912E12, "maxY": 442.03125, "series": [{"data": [[1.74327912E12, 442.03125], [1.74327918E12, 376.5798319327733]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74327918E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 375.0224089635853, "minX": 1.74327912E12, "maxY": 440.56249999999994, "series": [{"data": [[1.74327912E12, 440.56249999999994], [1.74327918E12, 375.0224089635853]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74327918E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 17.10644257703081, "minX": 1.74327912E12, "maxY": 50.21875000000002, "series": [{"data": [[1.74327912E12, 50.21875000000002], [1.74327918E12, 17.10644257703081]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74327918E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 228.0, "minX": 1.74327912E12, "maxY": 859.0, "series": [{"data": [[1.74327912E12, 859.0], [1.74327918E12, 529.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74327912E12, 564.4], [1.74327918E12, 502.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74327912E12, 859.0], [1.74327918E12, 525.4200000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74327912E12, 847.9499999999999], [1.74327918E12, 515.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74327912E12, 239.0], [1.74327918E12, 228.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74327912E12, 421.5], [1.74327918E12, 377.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74327918E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 347.0, "minX": 6.0, "maxY": 540.5, "series": [{"data": [[11.0, 459.0], [6.0, 540.5], [12.0, 400.5], [13.0, 371.0], [14.0, 382.5], [15.0, 347.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 346.0, "minX": 6.0, "maxY": 537.0, "series": [{"data": [[11.0, 458.0], [6.0, 537.0], [12.0, 399.0], [13.0, 369.0], [14.0, 380.5], [15.0, 346.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.74327912E12, "maxY": 5.866666666666666, "series": [{"data": [[1.74327912E12, 0.6166666666666667], [1.74327918E12, 5.866666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74327918E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.74327912E12, "maxY": 5.95, "series": [{"data": [[1.74327912E12, 0.5333333333333333], [1.74327918E12, 5.95]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74327918E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.74327912E12, "maxY": 5.95, "series": [{"data": [[1.74327912E12, 0.5333333333333333], [1.74327918E12, 5.95]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74327918E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.74327912E12, "maxY": 5.95, "series": [{"data": [[1.74327912E12, 0.5333333333333333], [1.74327918E12, 5.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74327918E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

