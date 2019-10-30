export { getContext, setContext } from "./core/Global";
export * from "./classes";
import { getContext } from "./core/Global";
export { start } from "./core/Global";

/**
 * The current audio context time of the global [[Context]]. 
 * See [[Context.now]]
 * @Category Core
 */
export const now = getContext().now.bind(getContext());

/**
 * The current audio context time of the global [[Context]] without the [[Context.lookAhead]]
 * See [[Context.immediate]]
 * @Category Core
 */
export const immediate = getContext().immediate.bind(getContext());

/**
 * The Transport object belonging to the global Tone.js Context.
 * See [[Transport]]
 * @Category Core
 */
export const Transport = getContext().transport;

/**
 * The Destination (output) belonging to the global Tone.js Context.
 * See [[Destination]]
 * @Category Core
 */
export const Destination = getContext().destination;

/**
 * Draw is used to synchronize the draw frame with the Transport's callbacks. 
 * See [[Draw]]
 * @Category Core
 */
export const Draw = getContext().draw;

/**
 * A reference to the global context
 * See [[Context]]
 * @Category Core
 */
export const context = getContext();
