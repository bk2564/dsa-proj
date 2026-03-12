import {
  Lc0001ExecutionSection,
  Lc0001Question,
  lc0001Meta,
} from "../algorithms/array/hashmap/two-sum";
import {
  Lc0033ExecutionSection,
  Lc0033Question,
  lc0033Meta,
} from "../algorithms/array/binary-search/search-rotated-sorted-array";
import {
  Lc0350ExecutionSection,
  lc0350Meta,
  Lc0350Question,
} from "../algorithms/array/hashmap/intersection-two-arrays-II";
import {
  Lc0122ExecutionSection,
  lc0122Meta,
  Lc0122Question,
} from "../algorithms/array/dynamic-programming/best-time-buy-sell-stock";
import {
  Lc0048ExecutionSection,
  lc0048Meta,
  Lc0048Question,
} from "../algorithms/array/math/rotate-image";
import {
  Lc0189ExecutionSection,
  lc0189Meta,
  Lc0189Question,
} from "../algorithms/array/math/rotate-array";
import {
  lc0066ExecutionSection,
  lc0066Meta,
  lc0066Question,
} from "../algorithms/array/math/plus-one";
import {
  Lc0136ExecutionSection,
  lc0136Meta,
  Lc0136Question,
} from "../algorithms/array/bit-manipulation/single-number";
import {
  Lc0217ExecutionSection,
  lc0217Meta,
  Lc0217Question,
} from "../algorithms/array/hashmap/contains-duplicate";
import { Lc0026ExecutionSection, lc0026Meta, Lc0026Question } from "../algorithms/array/two-pointers/remove-duplicates-sorted-array";
import { lc0209ExecutionSection, lc0209Meta, lc0209Question } from "../algorithms/array/binary-search/minimum-size-subarray-sum";

export const algorithms = [
  {
    ...lc0001Meta,
    name: lc0001Meta.title,
    question: Lc0001Question,
    execution: Lc0001ExecutionSection,
  },
  {
    ...lc0033Meta,
    name: lc0033Meta.title,
    question: Lc0033Question,
    execution: Lc0033ExecutionSection,
  },
  {
    ...lc0350Meta,
    name: lc0350Meta.title,
    question: Lc0350Question,
    execution: Lc0350ExecutionSection,
  },
  {
    ...lc0122Meta,
    name: lc0122Meta.title,
    question: Lc0122Question,
    execution: Lc0122ExecutionSection,
  },
  {
    ...lc0048Meta,
    name: lc0048Meta.title,
    question: Lc0048Question,
    execution: Lc0048ExecutionSection,
  },
  {
    ...lc0189Meta,
    name: lc0189Meta.title,
    question: Lc0189Question,
    execution: Lc0189ExecutionSection,
  },
  {
    ...lc0066Meta,
    name: lc0066Meta.title,
    question: lc0066Question,
    execution: lc0066ExecutionSection,
  },
  {
    ...lc0136Meta,
    name: lc0136Meta.title,
    question: Lc0136Question,
    execution: Lc0136ExecutionSection,
  },
  {
    ...lc0217Meta,
    name: lc0217Meta.title,
    question: Lc0217Question,
    execution: Lc0217ExecutionSection,
  },
  {
    ...lc0026Meta,
    name: lc0026Meta.title,
    question: Lc0026Question,
    execution: Lc0026ExecutionSection,
  },
  {
    ...lc0209Meta,
    name: lc0209Meta.title,
    question: lc0209Question,
    execution: lc0209ExecutionSection,
  }
].sort((a, b) => a.number - b.number);
