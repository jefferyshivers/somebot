/**
 * The MIT License
 *
 * Copyright 2018 Jeffery Shivers.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

const assign = require("assign-deep");

const defaults = {
  name: "sweetbot",
  styles: {
    shape: "3px",
    accentColor: "rgb(0,100,155)",
    headerColor: "white"
  },
  onload: {
    open: false
  },
  endpoint: {
    path: "chat",
    failureResponse:
      "Sorry, I'm experiencing some technical difficulties so I wasn't able to form a response for you. :("
  }
};

const auto = {
  styles: {
    shape: "25px 25px 10px 10px"
  },
  onload: {
    open: true,
    chat: {
      message: "Greetings from your autogenerated sweetbot",
      meta: {}
    }
  }
};

/**
 * Return default props to initialize bot.
 *
 * @param {boolean} autoprops
 * @returns {Object} default props
 */
const defaultprops = autoprops =>
  autoprops ? assign({}, defaults, auto) : Object.assign({}, defaults);

export default defaultprops;
