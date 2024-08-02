import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Author } from '../authors/schemas/author.schema';
import { Book } from '../books/schemas/book.schema';
import { User } from '../users/schemas/user.schema';
import { createHash } from 'crypto';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<Author>,
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async onModuleInit() {
    await this.seedAuthorsAndBooks();
    await this.seedUsers();
  }

  async seedAuthorsAndBooks() {
    const authors = [
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c85'),
        name: 'George Orwell',
        biography: 'English novelist and essayist, journalist and critic.',
        booksId: [
          new mongoose.Types.ObjectId('60d21b4667d0d8992e610c95'),
          new mongoose.Types.ObjectId('60d21b4667d0d8992e610c96'),
        ],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c86'),
        name: 'J.K. Rowling',
        biography: 'British author, best known for the Harry Potter series.',
        booksId: [
          new mongoose.Types.ObjectId('60d21b4667d0d8992e610c97'),
          new mongoose.Types.ObjectId('60d21b4667d0d8992e610c98'),
        ],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c87'),
        name: 'Ernest Hemingway',
        biography: 'American novelist, short-story writer, and journalist.',
        booksId: [new mongoose.Types.ObjectId('60d21b4667d0d8992e610c99')],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c88'),
        name: 'Mark Twain',
        biography:
          'American writer, humorist, entrepreneur, publisher, and lecturer.',
        booksId: [new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9a')],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c89'),
        name: 'Jane Austen',
        biography: 'English novelist known primarily for her six major novels.',
        booksId: [new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9b')],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8a'),
        name: 'Charles Dickens',
        biography: 'English writer and social critic.',
        booksId: [new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9c')],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8b'),
        name: 'F. Scott Fitzgerald',
        biography: 'American novelist and short story writer.',
        booksId: [new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9d')],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8c'),
        name: 'Leo Tolstoy',
        biography:
          'Russian writer who is regarded as one of the greatest authors of all time.',
        booksId: [new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9e')],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8d'),
        name: 'Herman Melville',
        biography:
          'American novelist, short story writer, and poet of the American Renaissance period.',
        booksId: [new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9f')],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8e'),
        name: 'Gabriel Garcia Marquez',
        biography:
          'Colombian novelist, short-story writer, screenwriter, and journalist.',
        booksId: [new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca0')],
      },
    ];

    const books = [
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c95'),
        title: '1984',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c85'),
        description:
          'A dystopian social science fiction novel and cautionary tale.',
        reviews: [
          'A chilling portrayal of a totalitarian society.',
          'Profound and thought-provoking.',
        ],
        ratings: [4.7, 4.8],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c96'),
        title: 'Animal Farm',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c85'),
        description:
          "A political fable based on the events of Russia's Bolshevik revolution.",
        reviews: ['A timeless allegory.', 'Brilliant and incisive.'],
        ratings: [4.6, 4.7],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c97'),
        title: "Harry Potter and the Sorcerer's Stone",
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c86'),
        description: 'The first novel in the Harry Potter series.',
        reviews: ['Magical and captivating.', 'A fantastic adventure.'],
        ratings: [4.8, 4.9],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c98'),
        title: 'Harry Potter and the Chamber of Secrets',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c86'),
        description: 'The second novel in the Harry Potter series.',
        reviews: [
          'Thrilling and magical.',
          'A superb continuation of the series.',
        ],
        ratings: [4.7, 4.8],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c99'),
        title: 'The Old Man and the Sea',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c87'),
        description:
          'A short novel about an aging fisherman who struggles with a giant marlin far out in the Gulf Stream.',
        reviews: ['A masterpiece.', 'A timeless classic.'],
        ratings: [4.9, 5.0],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9a'),
        title: 'The Adventures of Tom Sawyer',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c88'),
        description:
          'A novel about a young boy growing up along the Mississippi River.',
        reviews: ['A charming and lively story.', 'A delightful read.'],
        ratings: [4.5, 4.6],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9b'),
        title: 'Pride and Prejudice',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c89'),
        description:
          'A romantic novel that charts the emotional development of the protagonist Elizabeth Bennet.',
        reviews: ['A brilliant satire of manners.', 'A timeless romance.'],
        ratings: [4.8, 4.9],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9c'),
        title: 'Great Expectations',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8a'),
        description: 'The story of a young orphan named Pip.',
        reviews: ['A rich narrative.', 'Complex and moving.'],
        ratings: [4.7, 4.8],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9d'),
        title: 'The Great Gatsby',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8b'),
        description:
          'A novel about the American dream and the Roaring Twenties.',
        reviews: ['A haunting and cautionary tale.', 'Beautifully written.'],
        ratings: [4.8, 4.9],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9e'),
        title: 'War and Peace',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8c'),
        description:
          'A novel that chronicles the history of the French invasion of Russia.',
        reviews: [
          'An epic and sweeping narrative.',
          'A profound examination of history.',
        ],
        ratings: [4.9, 5.0],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9f'),
        title: 'Moby-Dick',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8d'),
        description:
          "The narrative of Captain Ahab's obsessive quest to kill the white whale, Moby Dick.",
        reviews: ['A grand adventure.', 'A deep and complex story.'],
        ratings: [4.8, 4.9],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca0'),
        title: 'One Hundred Years of Solitude',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8e'),
        description: 'The multi-generational story of the Buendía family.',
        reviews: ['A stunning and imaginative work.', 'Beautifully crafted.'],
        ratings: [4.9, 5.0],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca1'),
        title: 'To Kill a Mockingbird',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c8f'),
        description:
          'A novel about the serious issues of rape and racial inequality.',
        reviews: ['A profound and moving story.', 'Timeless and powerful.'],
        ratings: [4.8, 4.9],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca2'),
        title: 'The Catcher in the Rye',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c90'),
        description: 'A story about teenage alienation and rebellion.',
        reviews: [
          'A brilliant critique of society.',
          'A deeply moving narrative.',
        ],
        ratings: [4.7, 4.8],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca3'),
        title: 'Crime and Punishment',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c91'),
        description:
          'A psychological drama about the moral dilemmas of crime and justice.',
        reviews: [
          'An intense and thought-provoking novel.',
          'A masterpiece of literature.',
        ],
        ratings: [4.9, 5.0],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca4'),
        title: 'The Brothers Karamazov',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c92'),
        description:
          'A story that explores deep philosophical and theological themes.',
        reviews: [
          'A profound exploration of faith and doubt.',
          'A richly layered narrative.',
        ],
        ratings: [4.8, 4.9],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca5'),
        title: 'Brave New World',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c93'),
        description: 'A dystopian novel about a futuristic world state.',
        reviews: [
          'A chilling vision of the future.',
          'A provocative and unsettling story.',
        ],
        ratings: [4.7, 4.8],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca6'),
        title: 'Ulysses',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c94'),
        description:
          'A modernist novel that chronicles the experiences of Leopold Bloom in Dublin.',
        reviews: [
          'A groundbreaking work of fiction.',
          'A challenging and rewarding read.',
        ],
        ratings: [4.6, 4.7],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca7'),
        title: 'Don Quixote',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c95'),
        description:
          'A story about the adventures of a nobleman who believes himself to be a knight-errant.',
        reviews: ['A timeless classic.', 'A humorous and touching narrative.'],
        ratings: [4.8, 4.9],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca8'),
        title: 'Jane Eyre',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c96'),
        description: 'A novel about the experiences of a young orphaned girl.',
        reviews: [
          'A powerful and moving story.',
          'A beautifully written novel.',
        ],
        ratings: [4.9, 5.0],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610ca9'),
        title: 'Wuthering Heights',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c97'),
        description: 'A tragic love story set on the Yorkshire moors.',
        reviews: [
          'A haunting and powerful novel.',
          'A masterpiece of literature.',
        ],
        ratings: [4.7, 4.8],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610caa'),
        title: 'The Hobbit',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c98'),
        description: 'A fantasy novel about the journey of Bilbo Baggins.',
        reviews: ['A magical and enchanting story.', 'A timeless classic.'],
        ratings: [4.9, 5.0],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610cab'),
        title: 'Frankenstein',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c99'),
        description: 'A novel about the consequences of playing God.',
        reviews: [
          'A chilling and thought-provoking story.',
          'A masterpiece of gothic fiction.',
        ],
        ratings: [4.8, 4.9],
      },
      {
        _id: new mongoose.Types.ObjectId('60d21b4667d0d8992e610cac'),
        title: 'Dracula',
        authorId: new mongoose.Types.ObjectId('60d21b4667d0d8992e610c9a'),
        description: 'A gothic horror novel about the vampire Count Dracula.',
        reviews: [
          'A terrifying and thrilling story.',
          'A classic of gothic fiction.',
        ],
        ratings: [4.7, 4.8],
      },
    ];

    await this.authorModel.insertMany(authors);
    await this.bookModel.insertMany(books);
  }

  async seedUsers() {
    const users = [
      {
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: createHash('sha256').update('securepassword1').digest('hex'),
      },
      {
        username: 'jane_smith',
        email: 'jane.smith@example.com',
        password: createHash('sha256').update('securepassword2').digest('hex'),
      },
      {
        username: 'alice_jones',
        email: 'alice.jones@example.com',
        password: createHash('sha256').update('securepassword3').digest('hex'),
      },
      {
        username: 'bob_brown',
        email: 'bob.brown@example.com',
        password: createHash('sha256').update('securepassword4').digest('hex'),
      },
      {
        username: 'charlie_davis',
        email: 'charlie.davis@example.com',
        password: createHash('sha256').update('securepassword5').digest('hex'),
      },
      {
        username: 'diana_evans',
        email: 'diana.evans@example.com',
        password: createHash('sha256').update('securepassword6').digest('hex'),
      },
      {
        username: 'frank_garcia',
        email: 'frank.garcia@example.com',
        password: createHash('sha256').update('securepassword7').digest('hex'),
      },
      {
        username: 'grace_hall',
        email: 'grace.hall@example.com',
        password: createHash('sha256').update('securepassword8').digest('hex'),
      },
      {
        username: 'henry_lee',
        email: 'henry.lee@example.com',
        password: createHash('sha256').update('securepassword9').digest('hex'),
      },
      {
        username: 'irene_martin',
        email: 'irene.martin@example.com',
        password: createHash('sha256').update('securepassword10').digest('hex'),
      },
      {
        username: 'jack_moore',
        email: 'jack.moore@example.com',
        password: createHash('sha256').update('securepassword11').digest('hex'),
      },
      {
        username: 'karen_nelson',
        email: 'karen.nelson@example.com',
        password: createHash('sha256').update('securepassword12').digest('hex'),
      },
      {
        username: 'larry_owens',
        email: 'larry.owens@example.com',
        password: createHash('sha256').update('securepassword13').digest('hex'),
      },
      {
        username: 'molly_perez',
        email: 'molly.perez@example.com',
        password: createHash('sha256').update('securepassword14').digest('hex'),
      },
      {
        username: 'nathan_quinn',
        email: 'nathan.quinn@example.com',
        password: createHash('sha256').update('securepassword15').digest('hex'),
      },
      {
        username: 'olivia_reed',
        email: 'olivia.reed@example.com',
        password: createHash('sha256').update('securepassword16').digest('hex'),
      },
      {
        username: 'peter_scott',
        email: 'peter.scott@example.com',
        password: createHash('sha256').update('securepassword17').digest('hex'),
      },
      {
        username: 'quincy_taylor',
        email: 'quincy.taylor@example.com',
        password: createHash('sha256').update('securepassword18').digest('hex'),
      },
      {
        username: 'rachel_uy',
        email: 'rachel.uy@example.com',
        password: createHash('sha256').update('securepassword19').digest('hex'),
      },
      {
        username: 'steve_vargas',
        email: 'steve.vargas@example.com',
        password: createHash('sha256').update('securepassword20').digest('hex'),
      },
    ];

    await this.userModel.insertMany(users);
  }
}
