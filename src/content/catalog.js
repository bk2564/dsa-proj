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
import { Lc0350ExecutionSection, lc0350Meta, Lc0350Question } from "../algorithms/array/hashmap/intersection-two-arrays-II";
import { Lc0122ExecutionSection, lc0122Meta, Lc0122Question } from "../algorithms/array/dynamic-programming/best-time-buy-sell-stock";

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
].sort((a, b) => a.number - b.number);
