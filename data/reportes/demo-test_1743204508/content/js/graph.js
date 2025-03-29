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
        data: {"result": {"minY": 222.0, "minX": 0.0, "maxY": 131301.0, "series": [{"data": [[0.0, 222.0], [0.1, 223.0], [0.2, 227.0], [0.3, 227.0], [0.4, 228.0], [0.5, 228.0], [0.6, 229.0], [0.7, 229.0], [0.8, 230.0], [0.9, 230.0], [1.0, 230.0], [1.1, 230.0], [1.2, 231.0], [1.3, 231.0], [1.4, 231.0], [1.5, 231.0], [1.6, 231.0], [1.7, 231.0], [1.8, 232.0], [1.9, 232.0], [2.0, 232.0], [2.1, 232.0], [2.2, 233.0], [2.3, 233.0], [2.4, 233.0], [2.5, 233.0], [2.6, 234.0], [2.7, 234.0], [2.8, 234.0], [2.9, 234.0], [3.0, 234.0], [3.1, 234.0], [3.2, 234.0], [3.3, 234.0], [3.4, 234.0], [3.5, 234.0], [3.6, 236.0], [3.7, 236.0], [3.8, 236.0], [3.9, 236.0], [4.0, 236.0], [4.1, 236.0], [4.2, 236.0], [4.3, 237.0], [4.4, 237.0], [4.5, 237.0], [4.6, 238.0], [4.7, 238.0], [4.8, 238.0], [4.9, 239.0], [5.0, 239.0], [5.1, 239.0], [5.2, 240.0], [5.3, 240.0], [5.4, 240.0], [5.5, 240.0], [5.6, 240.0], [5.7, 241.0], [5.8, 241.0], [5.9, 241.0], [6.0, 241.0], [6.1, 241.0], [6.2, 242.0], [6.3, 242.0], [6.4, 242.0], [6.5, 243.0], [6.6, 243.0], [6.7, 244.0], [6.8, 244.0], [6.9, 244.0], [7.0, 245.0], [7.1, 245.0], [7.2, 245.0], [7.3, 246.0], [7.4, 247.0], [7.5, 247.0], [7.6, 247.0], [7.7, 247.0], [7.8, 248.0], [7.9, 248.0], [8.0, 248.0], [8.1, 248.0], [8.2, 249.0], [8.3, 249.0], [8.4, 249.0], [8.5, 249.0], [8.6, 250.0], [8.7, 250.0], [8.8, 250.0], [8.9, 250.0], [9.0, 251.0], [9.1, 251.0], [9.2, 251.0], [9.3, 252.0], [9.4, 252.0], [9.5, 252.0], [9.6, 252.0], [9.7, 252.0], [9.8, 253.0], [9.9, 253.0], [10.0, 254.0], [10.1, 254.0], [10.2, 254.0], [10.3, 254.0], [10.4, 255.0], [10.5, 255.0], [10.6, 255.0], [10.7, 256.0], [10.8, 256.0], [10.9, 257.0], [11.0, 257.0], [11.1, 257.0], [11.2, 257.0], [11.3, 257.0], [11.4, 258.0], [11.5, 258.0], [11.6, 259.0], [11.7, 260.0], [11.8, 260.0], [11.9, 260.0], [12.0, 260.0], [12.1, 260.0], [12.2, 260.0], [12.3, 261.0], [12.4, 261.0], [12.5, 262.0], [12.6, 262.0], [12.7, 262.0], [12.8, 263.0], [12.9, 263.0], [13.0, 264.0], [13.1, 264.0], [13.2, 264.0], [13.3, 264.0], [13.4, 264.0], [13.5, 264.0], [13.6, 264.0], [13.7, 265.0], [13.8, 265.0], [13.9, 265.0], [14.0, 266.0], [14.1, 266.0], [14.2, 266.0], [14.3, 266.0], [14.4, 267.0], [14.5, 267.0], [14.6, 267.0], [14.7, 268.0], [14.8, 268.0], [14.9, 268.0], [15.0, 268.0], [15.1, 271.0], [15.2, 271.0], [15.3, 271.0], [15.4, 271.0], [15.5, 272.0], [15.6, 272.0], [15.7, 273.0], [15.8, 273.0], [15.9, 274.0], [16.0, 274.0], [16.1, 274.0], [16.2, 274.0], [16.3, 274.0], [16.4, 274.0], [16.5, 276.0], [16.6, 276.0], [16.7, 276.0], [16.8, 276.0], [16.9, 277.0], [17.0, 277.0], [17.1, 277.0], [17.2, 278.0], [17.3, 278.0], [17.4, 278.0], [17.5, 279.0], [17.6, 279.0], [17.7, 280.0], [17.8, 280.0], [17.9, 280.0], [18.0, 280.0], [18.1, 280.0], [18.2, 280.0], [18.3, 280.0], [18.4, 280.0], [18.5, 281.0], [18.6, 281.0], [18.7, 281.0], [18.8, 281.0], [18.9, 282.0], [19.0, 282.0], [19.1, 282.0], [19.2, 283.0], [19.3, 283.0], [19.4, 283.0], [19.5, 283.0], [19.6, 283.0], [19.7, 283.0], [19.8, 284.0], [19.9, 284.0], [20.0, 284.0], [20.1, 284.0], [20.2, 285.0], [20.3, 285.0], [20.4, 285.0], [20.5, 286.0], [20.6, 286.0], [20.7, 286.0], [20.8, 287.0], [20.9, 287.0], [21.0, 288.0], [21.1, 288.0], [21.2, 288.0], [21.3, 289.0], [21.4, 289.0], [21.5, 289.0], [21.6, 289.0], [21.7, 289.0], [21.8, 289.0], [21.9, 289.0], [22.0, 290.0], [22.1, 290.0], [22.2, 290.0], [22.3, 290.0], [22.4, 290.0], [22.5, 291.0], [22.6, 291.0], [22.7, 292.0], [22.8, 292.0], [22.9, 292.0], [23.0, 292.0], [23.1, 293.0], [23.2, 293.0], [23.3, 293.0], [23.4, 294.0], [23.5, 294.0], [23.6, 294.0], [23.7, 295.0], [23.8, 296.0], [23.9, 296.0], [24.0, 296.0], [24.1, 296.0], [24.2, 296.0], [24.3, 297.0], [24.4, 297.0], [24.5, 297.0], [24.6, 297.0], [24.7, 297.0], [24.8, 298.0], [24.9, 298.0], [25.0, 298.0], [25.1, 298.0], [25.2, 299.0], [25.3, 299.0], [25.4, 300.0], [25.5, 300.0], [25.6, 300.0], [25.7, 301.0], [25.8, 302.0], [25.9, 302.0], [26.0, 302.0], [26.1, 302.0], [26.2, 303.0], [26.3, 303.0], [26.4, 303.0], [26.5, 303.0], [26.6, 303.0], [26.7, 303.0], [26.8, 304.0], [26.9, 304.0], [27.0, 304.0], [27.1, 304.0], [27.2, 304.0], [27.3, 305.0], [27.4, 306.0], [27.5, 306.0], [27.6, 306.0], [27.7, 306.0], [27.8, 307.0], [27.9, 307.0], [28.0, 307.0], [28.1, 308.0], [28.2, 308.0], [28.3, 308.0], [28.4, 309.0], [28.5, 309.0], [28.6, 309.0], [28.7, 309.0], [28.8, 310.0], [28.9, 310.0], [29.0, 310.0], [29.1, 310.0], [29.2, 310.0], [29.3, 311.0], [29.4, 311.0], [29.5, 311.0], [29.6, 311.0], [29.7, 311.0], [29.8, 312.0], [29.9, 312.0], [30.0, 312.0], [30.1, 313.0], [30.2, 313.0], [30.3, 314.0], [30.4, 314.0], [30.5, 314.0], [30.6, 314.0], [30.7, 315.0], [30.8, 315.0], [30.9, 315.0], [31.0, 315.0], [31.1, 316.0], [31.2, 316.0], [31.3, 316.0], [31.4, 316.0], [31.5, 317.0], [31.6, 317.0], [31.7, 318.0], [31.8, 318.0], [31.9, 318.0], [32.0, 318.0], [32.1, 318.0], [32.2, 318.0], [32.3, 319.0], [32.4, 319.0], [32.5, 319.0], [32.6, 320.0], [32.7, 320.0], [32.8, 321.0], [32.9, 321.0], [33.0, 322.0], [33.1, 322.0], [33.2, 322.0], [33.3, 322.0], [33.4, 323.0], [33.5, 323.0], [33.6, 323.0], [33.7, 324.0], [33.8, 324.0], [33.9, 325.0], [34.0, 325.0], [34.1, 326.0], [34.2, 326.0], [34.3, 327.0], [34.4, 327.0], [34.5, 327.0], [34.6, 328.0], [34.7, 328.0], [34.8, 328.0], [34.9, 328.0], [35.0, 329.0], [35.1, 329.0], [35.2, 329.0], [35.3, 330.0], [35.4, 330.0], [35.5, 330.0], [35.6, 330.0], [35.7, 331.0], [35.8, 331.0], [35.9, 331.0], [36.0, 331.0], [36.1, 332.0], [36.2, 332.0], [36.3, 332.0], [36.4, 333.0], [36.5, 333.0], [36.6, 333.0], [36.7, 334.0], [36.8, 334.0], [36.9, 335.0], [37.0, 335.0], [37.1, 335.0], [37.2, 335.0], [37.3, 335.0], [37.4, 336.0], [37.5, 336.0], [37.6, 336.0], [37.7, 337.0], [37.8, 337.0], [37.9, 337.0], [38.0, 337.0], [38.1, 337.0], [38.2, 337.0], [38.3, 337.0], [38.4, 338.0], [38.5, 338.0], [38.6, 338.0], [38.7, 339.0], [38.8, 339.0], [38.9, 339.0], [39.0, 340.0], [39.1, 340.0], [39.2, 340.0], [39.3, 340.0], [39.4, 340.0], [39.5, 341.0], [39.6, 341.0], [39.7, 341.0], [39.8, 341.0], [39.9, 342.0], [40.0, 342.0], [40.1, 343.0], [40.2, 343.0], [40.3, 344.0], [40.4, 344.0], [40.5, 344.0], [40.6, 346.0], [40.7, 346.0], [40.8, 347.0], [40.9, 348.0], [41.0, 348.0], [41.1, 348.0], [41.2, 348.0], [41.3, 349.0], [41.4, 349.0], [41.5, 349.0], [41.6, 350.0], [41.7, 350.0], [41.8, 350.0], [41.9, 350.0], [42.0, 350.0], [42.1, 350.0], [42.2, 351.0], [42.3, 352.0], [42.4, 352.0], [42.5, 353.0], [42.6, 353.0], [42.7, 353.0], [42.8, 353.0], [42.9, 353.0], [43.0, 354.0], [43.1, 354.0], [43.2, 354.0], [43.3, 354.0], [43.4, 355.0], [43.5, 355.0], [43.6, 356.0], [43.7, 356.0], [43.8, 357.0], [43.9, 357.0], [44.0, 358.0], [44.1, 358.0], [44.2, 358.0], [44.3, 359.0], [44.4, 359.0], [44.5, 359.0], [44.6, 360.0], [44.7, 360.0], [44.8, 360.0], [44.9, 360.0], [45.0, 361.0], [45.1, 361.0], [45.2, 361.0], [45.3, 361.0], [45.4, 362.0], [45.5, 362.0], [45.6, 362.0], [45.7, 362.0], [45.8, 362.0], [45.9, 363.0], [46.0, 363.0], [46.1, 363.0], [46.2, 364.0], [46.3, 364.0], [46.4, 365.0], [46.5, 365.0], [46.6, 365.0], [46.7, 365.0], [46.8, 366.0], [46.9, 366.0], [47.0, 366.0], [47.1, 367.0], [47.2, 367.0], [47.3, 367.0], [47.4, 368.0], [47.5, 368.0], [47.6, 369.0], [47.7, 369.0], [47.8, 370.0], [47.9, 370.0], [48.0, 370.0], [48.1, 371.0], [48.2, 372.0], [48.3, 372.0], [48.4, 373.0], [48.5, 374.0], [48.6, 374.0], [48.7, 374.0], [48.8, 375.0], [48.9, 375.0], [49.0, 375.0], [49.1, 375.0], [49.2, 376.0], [49.3, 376.0], [49.4, 376.0], [49.5, 376.0], [49.6, 377.0], [49.7, 377.0], [49.8, 377.0], [49.9, 377.0], [50.0, 378.0], [50.1, 378.0], [50.2, 378.0], [50.3, 379.0], [50.4, 379.0], [50.5, 379.0], [50.6, 379.0], [50.7, 379.0], [50.8, 380.0], [50.9, 380.0], [51.0, 380.0], [51.1, 380.0], [51.2, 381.0], [51.3, 381.0], [51.4, 381.0], [51.5, 382.0], [51.6, 382.0], [51.7, 382.0], [51.8, 382.0], [51.9, 382.0], [52.0, 382.0], [52.1, 383.0], [52.2, 383.0], [52.3, 384.0], [52.4, 384.0], [52.5, 384.0], [52.6, 384.0], [52.7, 384.0], [52.8, 385.0], [52.9, 385.0], [53.0, 385.0], [53.1, 385.0], [53.2, 386.0], [53.3, 386.0], [53.4, 387.0], [53.5, 387.0], [53.6, 388.0], [53.7, 389.0], [53.8, 389.0], [53.9, 389.0], [54.0, 390.0], [54.1, 390.0], [54.2, 391.0], [54.3, 391.0], [54.4, 391.0], [54.5, 392.0], [54.6, 392.0], [54.7, 392.0], [54.8, 393.0], [54.9, 393.0], [55.0, 393.0], [55.1, 394.0], [55.2, 394.0], [55.3, 394.0], [55.4, 394.0], [55.5, 395.0], [55.6, 395.0], [55.7, 395.0], [55.8, 395.0], [55.9, 395.0], [56.0, 395.0], [56.1, 395.0], [56.2, 395.0], [56.3, 396.0], [56.4, 396.0], [56.5, 396.0], [56.6, 396.0], [56.7, 397.0], [56.8, 397.0], [56.9, 397.0], [57.0, 398.0], [57.1, 398.0], [57.2, 398.0], [57.3, 399.0], [57.4, 399.0], [57.5, 399.0], [57.6, 399.0], [57.7, 399.0], [57.8, 400.0], [57.9, 400.0], [58.0, 400.0], [58.1, 401.0], [58.2, 401.0], [58.3, 401.0], [58.4, 402.0], [58.5, 402.0], [58.6, 402.0], [58.7, 402.0], [58.8, 402.0], [58.9, 403.0], [59.0, 403.0], [59.1, 404.0], [59.2, 404.0], [59.3, 404.0], [59.4, 405.0], [59.5, 405.0], [59.6, 405.0], [59.7, 405.0], [59.8, 405.0], [59.9, 405.0], [60.0, 406.0], [60.1, 406.0], [60.2, 406.0], [60.3, 407.0], [60.4, 407.0], [60.5, 407.0], [60.6, 407.0], [60.7, 407.0], [60.8, 407.0], [60.9, 407.0], [61.0, 407.0], [61.1, 408.0], [61.2, 408.0], [61.3, 408.0], [61.4, 409.0], [61.5, 409.0], [61.6, 409.0], [61.7, 409.0], [61.8, 410.0], [61.9, 410.0], [62.0, 410.0], [62.1, 410.0], [62.2, 411.0], [62.3, 411.0], [62.4, 411.0], [62.5, 411.0], [62.6, 411.0], [62.7, 411.0], [62.8, 412.0], [62.9, 412.0], [63.0, 412.0], [63.1, 413.0], [63.2, 413.0], [63.3, 413.0], [63.4, 413.0], [63.5, 413.0], [63.6, 414.0], [63.7, 414.0], [63.8, 414.0], [63.9, 414.0], [64.0, 415.0], [64.1, 415.0], [64.2, 415.0], [64.3, 415.0], [64.4, 415.0], [64.5, 416.0], [64.6, 416.0], [64.7, 416.0], [64.8, 416.0], [64.9, 417.0], [65.0, 418.0], [65.1, 418.0], [65.2, 418.0], [65.3, 420.0], [65.4, 420.0], [65.5, 420.0], [65.6, 421.0], [65.7, 421.0], [65.8, 422.0], [65.9, 422.0], [66.0, 422.0], [66.1, 422.0], [66.2, 423.0], [66.3, 423.0], [66.4, 423.0], [66.5, 424.0], [66.6, 425.0], [66.7, 425.0], [66.8, 425.0], [66.9, 425.0], [67.0, 426.0], [67.1, 427.0], [67.2, 427.0], [67.3, 427.0], [67.4, 427.0], [67.5, 428.0], [67.6, 429.0], [67.7, 429.0], [67.8, 429.0], [67.9, 429.0], [68.0, 429.0], [68.1, 430.0], [68.2, 430.0], [68.3, 430.0], [68.4, 432.0], [68.5, 432.0], [68.6, 432.0], [68.7, 433.0], [68.8, 433.0], [68.9, 433.0], [69.0, 434.0], [69.1, 434.0], [69.2, 435.0], [69.3, 435.0], [69.4, 435.0], [69.5, 436.0], [69.6, 436.0], [69.7, 436.0], [69.8, 437.0], [69.9, 437.0], [70.0, 438.0], [70.1, 438.0], [70.2, 438.0], [70.3, 439.0], [70.4, 439.0], [70.5, 439.0], [70.6, 439.0], [70.7, 439.0], [70.8, 440.0], [70.9, 440.0], [71.0, 440.0], [71.1, 441.0], [71.2, 441.0], [71.3, 441.0], [71.4, 441.0], [71.5, 442.0], [71.6, 442.0], [71.7, 443.0], [71.8, 443.0], [71.9, 443.0], [72.0, 444.0], [72.1, 445.0], [72.2, 445.0], [72.3, 445.0], [72.4, 445.0], [72.5, 446.0], [72.6, 446.0], [72.7, 446.0], [72.8, 447.0], [72.9, 447.0], [73.0, 447.0], [73.1, 447.0], [73.2, 448.0], [73.3, 448.0], [73.4, 448.0], [73.5, 449.0], [73.6, 449.0], [73.7, 449.0], [73.8, 449.0], [73.9, 450.0], [74.0, 450.0], [74.1, 450.0], [74.2, 450.0], [74.3, 450.0], [74.4, 451.0], [74.5, 451.0], [74.6, 452.0], [74.7, 452.0], [74.8, 453.0], [74.9, 453.0], [75.0, 453.0], [75.1, 454.0], [75.2, 455.0], [75.3, 455.0], [75.4, 455.0], [75.5, 455.0], [75.6, 456.0], [75.7, 457.0], [75.8, 457.0], [75.9, 457.0], [76.0, 457.0], [76.1, 458.0], [76.2, 458.0], [76.3, 458.0], [76.4, 458.0], [76.5, 458.0], [76.6, 459.0], [76.7, 459.0], [76.8, 459.0], [76.9, 460.0], [77.0, 460.0], [77.1, 460.0], [77.2, 460.0], [77.3, 461.0], [77.4, 461.0], [77.5, 461.0], [77.6, 461.0], [77.7, 462.0], [77.8, 462.0], [77.9, 462.0], [78.0, 462.0], [78.1, 463.0], [78.2, 463.0], [78.3, 463.0], [78.4, 464.0], [78.5, 464.0], [78.6, 464.0], [78.7, 465.0], [78.8, 465.0], [78.9, 465.0], [79.0, 465.0], [79.1, 465.0], [79.2, 465.0], [79.3, 466.0], [79.4, 466.0], [79.5, 466.0], [79.6, 466.0], [79.7, 467.0], [79.8, 467.0], [79.9, 467.0], [80.0, 467.0], [80.1, 467.0], [80.2, 469.0], [80.3, 469.0], [80.4, 470.0], [80.5, 470.0], [80.6, 471.0], [80.7, 471.0], [80.8, 471.0], [80.9, 471.0], [81.0, 472.0], [81.1, 473.0], [81.2, 473.0], [81.3, 473.0], [81.4, 474.0], [81.5, 474.0], [81.6, 474.0], [81.7, 474.0], [81.8, 475.0], [81.9, 475.0], [82.0, 475.0], [82.1, 475.0], [82.2, 475.0], [82.3, 475.0], [82.4, 475.0], [82.5, 475.0], [82.6, 475.0], [82.7, 476.0], [82.8, 476.0], [82.9, 477.0], [83.0, 477.0], [83.1, 478.0], [83.2, 478.0], [83.3, 478.0], [83.4, 478.0], [83.5, 479.0], [83.6, 479.0], [83.7, 480.0], [83.8, 480.0], [83.9, 480.0], [84.0, 481.0], [84.1, 481.0], [84.2, 482.0], [84.3, 482.0], [84.4, 482.0], [84.5, 483.0], [84.6, 483.0], [84.7, 483.0], [84.8, 483.0], [84.9, 483.0], [85.0, 484.0], [85.1, 484.0], [85.2, 485.0], [85.3, 485.0], [85.4, 486.0], [85.5, 486.0], [85.6, 486.0], [85.7, 486.0], [85.8, 487.0], [85.9, 487.0], [86.0, 487.0], [86.1, 487.0], [86.2, 488.0], [86.3, 488.0], [86.4, 488.0], [86.5, 488.0], [86.6, 488.0], [86.7, 489.0], [86.8, 489.0], [86.9, 489.0], [87.0, 489.0], [87.1, 490.0], [87.2, 490.0], [87.3, 491.0], [87.4, 491.0], [87.5, 491.0], [87.6, 491.0], [87.7, 491.0], [87.8, 492.0], [87.9, 492.0], [88.0, 492.0], [88.1, 493.0], [88.2, 493.0], [88.3, 493.0], [88.4, 493.0], [88.5, 494.0], [88.6, 494.0], [88.7, 494.0], [88.8, 495.0], [88.9, 495.0], [89.0, 495.0], [89.1, 495.0], [89.2, 496.0], [89.3, 496.0], [89.4, 497.0], [89.5, 497.0], [89.6, 498.0], [89.7, 498.0], [89.8, 499.0], [89.9, 499.0], [90.0, 499.0], [90.1, 500.0], [90.2, 500.0], [90.3, 501.0], [90.4, 501.0], [90.5, 501.0], [90.6, 501.0], [90.7, 502.0], [90.8, 502.0], [90.9, 502.0], [91.0, 503.0], [91.1, 503.0], [91.2, 503.0], [91.3, 503.0], [91.4, 503.0], [91.5, 503.0], [91.6, 504.0], [91.7, 504.0], [91.8, 504.0], [91.9, 505.0], [92.0, 505.0], [92.1, 505.0], [92.2, 505.0], [92.3, 506.0], [92.4, 506.0], [92.5, 507.0], [92.6, 507.0], [92.7, 507.0], [92.8, 507.0], [92.9, 508.0], [93.0, 508.0], [93.1, 508.0], [93.2, 508.0], [93.3, 509.0], [93.4, 509.0], [93.5, 509.0], [93.6, 509.0], [93.7, 509.0], [93.8, 509.0], [93.9, 509.0], [94.0, 509.0], [94.1, 510.0], [94.2, 511.0], [94.3, 511.0], [94.4, 511.0], [94.5, 511.0], [94.6, 511.0], [94.7, 511.0], [94.8, 511.0], [94.9, 512.0], [95.0, 512.0], [95.1, 512.0], [95.2, 513.0], [95.3, 513.0], [95.4, 513.0], [95.5, 513.0], [95.6, 513.0], [95.7, 513.0], [95.8, 514.0], [95.9, 514.0], [96.0, 514.0], [96.1, 515.0], [96.2, 515.0], [96.3, 515.0], [96.4, 515.0], [96.5, 516.0], [96.6, 516.0], [96.7, 516.0], [96.8, 516.0], [96.9, 516.0], [97.0, 516.0], [97.1, 518.0], [97.2, 518.0], [97.3, 518.0], [97.4, 518.0], [97.5, 519.0], [97.6, 519.0], [97.7, 520.0], [97.8, 520.0], [97.9, 520.0], [98.0, 521.0], [98.1, 521.0], [98.2, 521.0], [98.3, 522.0], [98.4, 522.0], [98.5, 523.0], [98.6, 523.0], [98.7, 524.0], [98.8, 524.0], [98.9, 524.0], [99.0, 524.0], [99.1, 525.0], [99.2, 526.0], [99.3, 526.0], [99.4, 527.0], [99.5, 528.0], [99.6, 531.0], [99.7, 560.0], [99.8, 570.0], [99.9, 648.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 487.0, "series": [{"data": [[131300.0, 1.0], [600.0, 2.0], [300.0, 487.0], [200.0, 382.0], [400.0, 486.0], [500.0, 147.0]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 131300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1358.0, "series": [{"data": [[0.0, 1358.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 146.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.74320448E12, "maxY": 9.985411140583551, "series": [{"data": [[1.74320448E12, 9.985411140583551], [1.74320466E12, 1.0], [1.74320454E12, 9.952000000000002]], "isOverall": false, "label": "Usuarios", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320466E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 303.0, "minX": 1.0, "maxY": 131301.0, "series": [{"data": [[8.0, 506.8333333333333], [4.0, 458.0], [2.0, 518.0], [1.0, 131301.0], [9.0, 536.5], [10.0, 374.8657718120802], [5.0, 424.0], [6.0, 342.0], [3.0, 522.0], [7.0, 303.0]], "isOverall": false, "label": "Google", "isController": false}, {"data": [[9.962790697674437, 462.8119601328906]], "isOverall": false, "label": "Google-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1.8666666666666667, "minX": 1.74320448E12, "maxY": 11020.966666666667, "series": [{"data": [[1.74320448E12, 11020.966666666667], [1.74320466E12, 14.616666666666667], [1.74320454E12, 10962.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74320448E12, 1407.4666666666667], [1.74320466E12, 1.8666666666666667], [1.74320454E12, 1400.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320466E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 372.49066666666664, "minX": 1.74320448E12, "maxY": 131301.0, "series": [{"data": [[1.74320448E12, 379.12864721485454], [1.74320466E12, 131301.0], [1.74320454E12, 372.49066666666664]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320466E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 371.33199999999994, "minX": 1.74320448E12, "maxY": 131299.0, "series": [{"data": [[1.74320448E12, 377.9933687002654], [1.74320466E12, 131299.0], [1.74320454E12, 371.33199999999994]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320466E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 16.342666666666684, "minX": 1.74320448E12, "maxY": 130931.0, "series": [{"data": [[1.74320448E12, 18.230769230769234], [1.74320466E12, 130931.0], [1.74320454E12, 16.342666666666684]], "isOverall": false, "label": "Google", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320466E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 222.0, "minX": 1.74320448E12, "maxY": 131301.0, "series": [{"data": [[1.74320448E12, 648.0], [1.74320466E12, 131301.0], [1.74320454E12, 534.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74320448E12, 500.0], [1.74320466E12, 131301.0], [1.74320454E12, 498.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74320448E12, 526.9000000000001], [1.74320466E12, 131301.0], [1.74320454E12, 523.49]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74320448E12, 511.0], [1.74320466E12, 131301.0], [1.74320454E12, 513.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74320448E12, 222.0], [1.74320466E12, 131301.0], [1.74320454E12, 227.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74320448E12, 382.0], [1.74320466E12, 131301.0], [1.74320454E12, 372.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320466E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 361.5, "minX": 1.0, "maxY": 131301.0, "series": [{"data": [[1.0, 131301.0], [18.0, 366.5], [21.0, 422.0], [22.0, 394.5], [23.0, 388.5], [24.0, 386.5], [3.0, 518.0], [25.0, 374.0], [26.0, 362.0], [27.0, 382.0], [28.0, 361.5], [29.0, 382.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 360.0, "minX": 1.0, "maxY": 131299.0, "series": [{"data": [[1.0, 131299.0], [18.0, 365.5], [21.0, 420.5], [22.0, 390.5], [23.0, 387.5], [24.0, 385.5], [3.0, 516.0], [25.0, 371.0], [26.0, 360.5], [27.0, 382.0], [28.0, 360.0], [29.0, 381.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 29.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.35, "minX": 1.74320448E12, "maxY": 12.733333333333333, "series": [{"data": [[1.74320448E12, 12.733333333333333], [1.74320454E12, 12.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320454E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74320448E12, "maxY": 12.566666666666666, "series": [{"data": [[1.74320448E12, 12.566666666666666], [1.74320466E12, 0.016666666666666666], [1.74320454E12, 12.5]], "isOverall": false, "label": "302", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74320466E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74320448E12, "maxY": 12.566666666666666, "series": [{"data": [[1.74320448E12, 12.566666666666666], [1.74320466E12, 0.016666666666666666], [1.74320454E12, 12.5]], "isOverall": false, "label": "Google-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320466E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74320448E12, "maxY": 12.566666666666666, "series": [{"data": [[1.74320448E12, 12.566666666666666], [1.74320466E12, 0.016666666666666666], [1.74320454E12, 12.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74320466E12, "title": "Total Transactions Per Second"}},
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

