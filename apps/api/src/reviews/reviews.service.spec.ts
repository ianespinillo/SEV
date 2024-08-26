import { Test, TestingModule } from '@nestjs/testing';
import { ReviewsService } from './reviews.service';
import { DbService } from 'src/db/db.service';

const dbMock = {
  review: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
  },
  $transaction: jest.fn((tx) =>
    tx({
      review: dbMock.review,
    }),
  ),
};

const review = {
  name: 'test',
  message: 'test',
  email: 'test',
};

describe('ReviewsService', () => {
  let service: ReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewsService,
        {
          provide: DbService,
          useValue: dbMock,
        },
      ],
    }).compile();

    service = module.get<ReviewsService>(ReviewsService);
  });

  describe('Reviews Service test', () => {
    it('should create a review', async () => {
      dbMock.review.create.mockResolvedValue(review);
      const result = await service.create(review);
      expect(result).toBe({ ...review, id: 1 });
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
