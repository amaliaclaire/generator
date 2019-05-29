exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {
          id: 1,
          quote: 'You should be neutered',
          category: 'fuckboy',
          rank: 1
        },
        {
          id: 2,
          quote: 'You won the worst fuck boy award. Congrats.',
          category: 'fuckboy',
          rank: 'testrank2'
        },
        {
          id: 3,
          quote: "you're a joke.",
          category: 'fuckboy',
          rank: 1
        },
        {
          id: 4,
          quote: "does your mother know this is how you talk to women",
          category: 'concerned citizen',
          rank: 2
        },
        {
          id: 5,
          quote: "I accidently swiped right, don't get too excited",
          category: 'concerned citizen',
          rank: 2
        },
        {
          id: 6,
          quote: "http://wwww.improveyoursocialskills.com/conversations",
          category: 'concerned citizen',
          rank: 2
        },
        {
          id: 7,
          quote: "you realize you just cock blocked yourself right?",
          category: 'destroy manhood',
          rank: 3
        },
        {
          id: 8,
          quote: "darwinsim, in it's full form",
          category: 'destroy manhood',
          rank: 3
        },
      ]);
    });
};
