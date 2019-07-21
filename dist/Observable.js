"use strict";
/**
 * Copyright 2017 Raphael Lauterbach
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Observable {
    constructor() {
        this._observers = new Map();
    }
    get observers() { return this._observers; }
    addObserverForKey(givenObserver, givenKey) {
        if (givenObserver && typeof this[givenKey] !== `undefined`) {
            let observersForKey = this.observers.get(givenKey);
            if (observersForKey) {
                observersForKey.add(givenObserver);
            }
            else {
                observersForKey = new Set();
                observersForKey.add(givenObserver);
                this.observers.set(givenKey, observersForKey);
            }
        }
    }
    removeObserverForKey(givenObserver, givenKey) {
        if (givenObserver && givenKey) {
            const observersForKey = this.observers.get(givenKey);
            if (observersForKey) {
                observersForKey.delete(givenObserver);
            }
        }
    }
    notifyObservers(givenKey, givenNewValue, givenOldValue) {
        this.observers.forEach((observersForKey) => {
            observersForKey.forEach((observer) => {
                observer.observeValueForKey(givenKey, givenNewValue, givenOldValue, this);
            });
        });
    }
}
exports.Observable = Observable;
