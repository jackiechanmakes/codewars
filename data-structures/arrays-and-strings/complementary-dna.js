/*
 * Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development
 * and functioning of living organisms.
 *
 * If you want to know more: http://en.wikipedia.org/wiki/DNA
 *
 * In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
 * Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.
 * DNA strand is never empty or there is no DNA at all (again, except for Haskell).
 *
 * More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
 *
 * Example: (input --> output)
 * "ATTGC" --> "TAACG"
 * "GTAT" --> "CATA"
 */

function DNAStrand(dna){
    return dna.split('').map(base => complementaryDnaMap(base)).join('');
}

function complementaryDnaMap(base) {
  switch (base) {
    case 'A':
      return 'T';
    case 'T':
      return 'A';
    case 'C':
      return 'G';
    case 'G':
      return 'C';
    default:
      console.log("Invalid letter inputted!");
  }
}

// Test cases
console.log(DNAStrand("AAAA"));  // "TTTT"
console.log(DNAStrand("ATTGC")); // "TAACG"
console.log(DNAStrand("GTAT"));  // "CATA"
