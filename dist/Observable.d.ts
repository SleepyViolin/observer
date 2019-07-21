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
import * as Observer from "./Observer";
export declare class Observable {
    protected _observers: Map<string, Set<Observer.Observer>>;
    protected readonly observers: Map<string, Set<Observer.Observer>>;
    addObserverForKey(givenObserver: Observer.Observer, givenKey: string): void;
    removeObserverForKey(givenObserver: Observer.Observer, givenKey: string): void;
    protected notifyObservers(givenKey: string, givenNewValue: any, givenOldValue: any): void;
}
