const sortMapper = sort => {
  const map = {
    recent: '-createdAt',
    popular: 'voteCount'
  };

  return map[sort];
};

const advancedResults = async ({
  req,
  model,
  select,
  populate,
  filter,
  lean
}) => {
  const page = parseInt(req.query.page, 10) ?? 1;
  const limit = parseInt(req.query.limit, 10) ?? 20;
  const sort = sortMapper(req.query.sort) ?? '-createdAt';
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.find(filter).countDocuments();

  let query = model
    .find(filter)
    .populate(populate)
    .select(select)
    .sort(sort)
    .skip(startIndex)
    .limit(limit);

  if (lean) {
    query.lean();
  }

  const results = await query;

  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  return { results, pagination };
};

module.exports = advancedResults;
